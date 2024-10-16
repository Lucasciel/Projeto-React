//COMPONENTS
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import ProjectsList from '../components/ProjectsList/ProjectsList'

export default function Home() {
    return (
        <>
            <Header />

                <Hero></Hero>


            <div className='container'>
            <ProjectsList></ProjectsList>
            </div>
            

            <Footer />
        </>
    )
}

