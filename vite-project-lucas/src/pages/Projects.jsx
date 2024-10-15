import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import Footer from '../components/Footer/Footer'


export default function Projects() {
    return (
        <>
            <Header />
            <Banner image="projects.svg" title='Projects' />
            <div className='container'>
                <ProjectsList />
            </div>

            <Footer />
        </>
    )
}