import { Link } from 'react-router-dom'
import './Footer.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import instagramIcon from '../../assets/instagram.svg'
import usaIcon from '../../assets/usa.svg'
import brazilIcon from '../../assets/brazil.svg'

export default function Footer() {
    return (
        <header>
            <div className='container'>
                <div className='d-flex jc-space-between footer-mobile'>
                    <div className='footer-logo-col'>
                        <img src={Logo} alt="" />
                        <p className='gray-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className='d-flex al-center jc-space-between'>
                            <a href="http://google.com" target="_blank" >
                                <img src={facebookIcon} alt="" />
                            </a>
                            <a href="http://google.com" target="_blank" >
                                <img src={twitterIcon} alt="" />
                            </a>
                            <a href="http://google.com" target="_blank" >
                                <img src={linkedinIcon} alt="" />
                            </a>
                            <a href="http://google.com" target="_blank" >
                                <img src={instagramIcon} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className='d-flex footer-col-2'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul className='d-flex fd-column footer-a'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About us</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>

                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='grey-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p>luckaslink@gmail.com</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex jc-space-between footer-copy al-center'>
                    <p className='grey-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <a href="http://google.com" target="_blank" >
                            <img src={brazilIcon} alt="" />
                        </a>
                        <a href="http://google.com" target="_blank" >
                            <img src={usaIcon} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </header>
    )
}