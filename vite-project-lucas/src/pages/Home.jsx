//COMPONENTS
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/button/button'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import ProjectsList from '../components/ProjectsList/ProjectsList'

export default function Home() {
    return(
        <>
        <Header/>


        <Button buttonStyle={'primary'} arrow>olá</Button>

        <Banner image="about.svg" title='Home'></Banner>
        
        <ProjectsList></ProjectsList>
        <Hero></Hero>
        <Footer/>
        </>
    )
}

