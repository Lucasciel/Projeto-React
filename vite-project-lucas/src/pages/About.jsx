import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import AboutText from '../components/AboutText/AboutText'

export default function About() {
    return (
        <>
            <Header />
            <Banner image="about.svg" title='About' />
            <div className='container'>
                <AboutText/>
            </div>

            <Footer />
        </>
    )
}