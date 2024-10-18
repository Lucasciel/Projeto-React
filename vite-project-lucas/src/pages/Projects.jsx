import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import Footer from '../components/Footer/Footer'

//Context
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export default function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner image="projects.svg" title={appContext.languages[appContext.language].menu.projects} />
            <div className='container'>
                <ProjectsList />
            </div>

            <Footer />
        </>
    )
}