import { Link } from 'react-router-dom'
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className='d-flex al-center jc-space-between'>
                    <Link to='/'><img src={Logo} alt="Logo" /></Link>
                    <nav>
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