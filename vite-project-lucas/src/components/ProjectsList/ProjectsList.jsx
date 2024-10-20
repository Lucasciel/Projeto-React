import './ProjectsList.css'
//COMPONENTS
import Button from '../Button/Button'
//ASSETS
import LikeWhite from '../../assets/like-white.svg'
import LikeBlack from '../../assets/like-black.svg'

//SERVICES
import { useState, useEffect } from 'react'
import { getApiData } from '../../services/apiServices' //dados da api em json

//Context
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export default function ProjectsList(props) {
    //funcionalidade localSession
    const [favProjects, setFavProjects] = useState([])

    const SavedFavProjects = (id) => {
        setFavProjects((prevFavProjects)=> { //prevFavProjects= apenas nome de parametro
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId)=> projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))//guarda
                return prevFavProjects.filter((projectId)=> projectId !==id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects,id]))
                return [...prevFavProjects, id]
            }
        })
    }

    //pegue o item do sessionStorage e me volte em json, se tiver coloque no usestate
    useEffect(()=> {
        const SavedFavProjects=JSON.parse(sessionStorage.getItem('favProjects'))
        if (SavedFavProjects) {
            setFavProjects(SavedFavProjects)
        }
    },[])

    //funcionalidade para envio de formulário
    const [projects, setProjects] = useState([])  //vai guardar os dados da api em json
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects') //solicita dados da api Projetos em json
                setProjects(projectsResponse) //manda para o usestates
            } catch {
                setProjects([])
            }
        }
        fetchData() //ativa 1 vez
    }, []) //[]= faz com que useEfect seja acionado 1 vez apenas


    //Funcionalidade para texto de api
    const appContext = useContext(AppContext)

    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>

            <div className='projects-grid'>
                {
                    projects?
                    projects.map((project) => ( //project é cada objeto da lista 
                        <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                            <div 
                                className='thumb tertiary-background'
                                style={{backgroundImage: `url(${project.thumb})`}} //adiciona css de imagem da api
                                ></div>
                            <h3>{project.title}</h3> 
                            <p>{project.subtitle}</p>
                            <Button buttonStyle='disable' onClick={()=> SavedFavProjects(project.id)}>
                                <img src={favProjects.includes(project.id)? LikeBlack:LikeWhite} />
                            </Button>
                            
                        </div>
                    ))
                    : null
                }
                

            </div>
        </div>
    )
}
