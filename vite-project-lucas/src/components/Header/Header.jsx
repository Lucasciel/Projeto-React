import { Link } from 'react-router-dom' //mudar url
import { useState } from 'react'
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//COMPONENTS
import Button from '../Button/Button'

//Context
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export default function Header() {
    //menu mobile:
    const [isOpen, setIsOpen] = useState(false) //apenas armazena false (temos 2 css, apenas trocaremos os estilos)
    const toggleMenu = () => { setIsOpen(!isOpen) } //troca o valor false para true ou true para false se algo acontecer

    //textoApi useContext ()
    const appContext = useContext(AppContext)


    return (
        <header>
            <div className='container'>
                <div className='d-flex al-center jc-space-between'>
                    <Link to='/'><img src={Logo} alt="Logo" /></Link>
                    <div className='mobile-menu'>
                        <Button buttonStyle='secondary' onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle='unstyled' className='mobile-menu close-btn' onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className='d-flex ' >
                            <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}