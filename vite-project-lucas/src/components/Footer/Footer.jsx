import { Link } from 'react-router-dom'

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import instagramIcon from '../../assets/instagram.svg'
import usaIcon from '../../assets/usa.svg'
import brazilIcon from '../../assets/brazil.svg'

//COMPONENTS
import Button from '../Button/Button'

//CONTEXT (compartilhamento global de dados de api)
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export default function Footer() {

    //Texto da api
    const appContext = useContext(AppContext) //useContext(AppContext).setLanguage(country)

    //função para botão troca de linguagem
    const changeLanguage = (mudarLinguegem) => {  //troca a linguagem da variavel do componente pai
        appContext.setLanguage(mudarLinguegem)   //setLanguage está na pasta contexts
    }


    return (
        <header>
            <div className='container'>
                <div className='d-flex jc-space-between footer-mobile'>
                    <div className='footer-logo-col'>
                        <img src={Logo} alt="" />
                        <p className='gray-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
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
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul className='d-flex fd-column footer-a'>
                                <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>

                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className='grey-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p>luckaslink@gmail.com</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex jc-space-between footer-copy al-center'>
                    <p className='grey-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle='disable' onClick={()=> changeLanguage('br')}>
                            <img src={brazilIcon} alt="" />
                        </Button>
                            
                        <Button buttonStyle='disable'  onClick={()=> changeLanguage('en')}>
                            <img src={usaIcon} alt="" />
                        </Button>
                        
                    </div>
                </div>

            </div>
        </header>
    )
}