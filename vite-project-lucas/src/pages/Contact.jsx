import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/contactForm/contactForm'

//Context
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
export default function Contact() {

    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner image="contact.svg" title={appContext.languages[appContext.language].menu.contact} />
            <div className='container'>
                <ContactForm/>
            </div>

            <Footer />
        </>
    )
}