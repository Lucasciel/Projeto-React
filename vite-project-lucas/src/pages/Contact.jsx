import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/contactForm/contactForm'

export default function Contact() {
    return (
        <>
            <Header />
            <Banner image="contact.svg" title='Contact' />
            <div className='container'>
                <ContactForm/>
            </div>

            <Footer />
        </>
    )
}