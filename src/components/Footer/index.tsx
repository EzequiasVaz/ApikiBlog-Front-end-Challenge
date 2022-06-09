import { CaretCircleUp, FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './index.css'
import './mediaqueries.css'

export function Footer() {
    return (
        <footer>

            <div className='container-footer-fluid'>

                <div className='container-footer'>

                    <button className='back-top' onClick={() => { window.scrollTo(0, 0) }}><CaretCircleUp size={40} weight='thin' /></button>

                    <img className='footer-background-left' src="../../assets/apikiLogoFooterOutlineLeft.svg" alt="" />
                    <img className='footer-background-right' src="../.././src/assets/apikiLogoFooterOutlineRight.svg" alt="" />

                    <div className='about-apiki'>
                        <Link to={'/'}>
                            <img src="./src/assets/ApikiLogoFooter.png" alt="" />
                        </Link>
                        <p>Empresa especializada em WordPress com três unidades de negócios.
                        </p>
                        <p>Design e Desenvolvimento;
                            Infra e Hospedagem;
                            Suporte e manutenção.
                        </p>
                        <p>Em resumo, só fazemos uma coisa em WordPress: tudo.</p>
                    </div>
                    <div className='flex gap-10  text-white mt-3'>
                        <Link to={''}><FacebookLogo size={32} /></Link>
                        <Link to={''}><YoutubeLogo size={32} /></Link>
                        <Link to={''}><TwitterLogo size={32} /></Link>
                        <Link to={''}><GithubLogo size={32} /></Link>
                        <Link to={''}><InstagramLogo size={32} /></Link>
                    </div>
                </div>


            </div>


        </footer>
    )
}