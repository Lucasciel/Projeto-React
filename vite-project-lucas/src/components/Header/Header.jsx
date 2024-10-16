import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//COMPONENTS
import Button from '../Button/Button'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false) //apenas armazena false (temos 2 css, apenas trocaremos os estilos)
    const toggleMenu = () => {setIsOpen(!isOpen)} //troca o valor false para true ou true para false se algo acontecer
    
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

                    <nav className={`${isOpen? 'open' : ''}`}>  
                        <Button buttonStyle='unstyled' className='mobile-menu close-btn'  onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className='d-flex'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}