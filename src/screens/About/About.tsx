import React from 'react';

import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Footer from '../../components/Footer/Footer';
import './About.css';

import aboutBackground from "../../assets/about/about_background.png";
import aboutCarImage from "../../assets/about/carro_empresa.png";
import aboutImage from "../../assets/about/img_sobre.png";
import iconBuilding from "../../assets/about/icon_building.png";
import iconCar from "../../assets/about/icon_car.png";
import iconHouse from "../../assets/about/icon_house.png";

const About = () => {
    return(
        <>
            <TopNavigation />
            <div className='body'>
                <div className='section about'>
                    <div className='about__card'>
                        <div className='about__card--info'>
                            <h1 className='about__card--info--title'>A ST Film do Brasil</h1>
                            <p className='about__card--info--text'>A ST Film do Brasil
                                A St Film do Brasil Ltda iniciou suas atividades em janeiro de 2004 com a missão de fornecer produtos de qualidade para consumidores cada vez mais exigentes. 
                                Com uma equipe treinada para instruir nas melhores opções existentes, oferecemos uma grande variedade de películas de altíssima qualidade, com diversos modelos como: 
                                automotivas, residencias, comerciais e acessórios para aplicação, com bom atendimento e respeito ao cliente, 
                                trabalhamos na busca de aperfeiçoamento logístico para entrega, constante busca de novos produtos, 
                                segurança de comercialização com idoneidade e respeito as legislações vigentes
                            </p>
                        </div>
                        <div className='about__card--info'>
                            <img src={aboutImage} className="aboutImage"/>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='about__card'>
                        <div className='about__card--info'>
                            <img src={aboutCarImage} className="aboutImage"/>
                        </div>
                        <div className='about__card--info'>
                            <h2 className='about__card--info--subTitle' >A Tecnologia</h2>
                            <h1 className='about__card--info--title'>A ST Film do Brasil</h1>
                            <p className='about__card--info--text'>A ST Film do Brasil
                                Para atender esse mercado, importamos uma grande variedade de películas de altissima qualidade
                                com diversos modelos para aplicações automotivas, residencias e comerciais. Assim como
                                acessórios para aplicação das mesmas.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='section'>
                    <div className='about__card'>
                        <div className='about__card--iconBox'>
                            <img src={iconCar} className="icon"/>
                            <h1 className='about__card--iconBox--title'>Automotivas</h1>
                            <p className='about__card--iconBox--text'>Encontre em nossa empresa a melhor pelicula para seu veiculo, com inúmeros benefícios para sua saúde e segurança.</p>
                        </div>
                        <div className='about__card--iconBox'>
                            <img src={iconHouse} className="icon"/>
                            <h1 className='about__card--iconBox--title'>Residencias</h1>
                            <p className='about__card--iconBox--text'>Torne seu projeto atual, dinâmico com foco em beleza, conforto, e economia de energia.</p>
                        </div>
                        <div className='about__card--iconBoxLast'>
                            <img src={iconBuilding} className="icon"/>
                            <h1 className='about__card--iconBox--title'>Comercias</h1>
                            <p className='about__card--iconBox--text'>Utilize nossas películas em sua empresa e impressiona pela beleza e conforto oferecido aos seus colaboradores.</p>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='offersBox'>
                        <div className='offersContent'>
                            <h1 className='offersContent__title'>Receba Nossas Ofertas</h1>
                            <p className='offersContent__text'>Fique por dentro das novidades que temos para você, cadastre-se e receba nossas ofertas por e-mail</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About;