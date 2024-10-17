import './ProjectsList.css'

//ASSETS
import LikeWhite from '../../assets/like-white.svg'
import LikeBlack from '../../assets/like-black.svg'

//SERVICES
import { useState, useEffect } from 'react'
import { getApiData } from '../../services/apiServices' //dados da api em json


export default function ProjectsList(props) {

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

    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>

            <div className='projects-grid'>
                {
                    projects.map((project) => ( //pega cada objeto da lista
                        <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                            <div 
                                className='thumb tertiary-background'
                                style={{backgroundImage: `url(${project.thumb})`}} //adiciona css de imagem da api
                                ></div>
                            <h3>{project.title}</h3> 
                            <p>{project.subtitle}</p>
                            <img src={LikeBlack} />
                        </div>
                    ))
                }
                

            </div>
        </div>
    )
}
