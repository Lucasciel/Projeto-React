import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import AboutText from '../components/AboutText/AboutText'

//Context
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
export default function About() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner image="about.svg" title={appContext.languages[appContext.language].menu.about} />
            <div className='container'>
                <AboutText/>
            </div>

            <Footer />
        </>
    )
}