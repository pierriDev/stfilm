import React from "react";

import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Footer from '../../components/Footer/Footer';


import placeholder from "../../assets/placeholder.png";
import icon_paper from "../../assets/icon_paper.png";
import megaphone from "../../assets/info/megaphone.png";
import { FaArrowRight } from "react-icons/fa";

import './Information.css';
import { website } from "../../constants/endpoints";

const Information = () => {
    return(
        <div className="body">
            <TopNavigation />
            <div className="section imageSection">
                <img src={placeholder} className="imageSection__img"/>
            </div>
            <div className="section infoSection">
                <div className="infoRow">
                    <div className="informationBox">
                        <h1 className="infoCard__title">Antes de Comprar</h1>
                        <h2 className="infoCard__subtitle">Conheça a Legislação das películas para carro:</h2>
                        <p className="infoCard__text">
                            Você pode usar películas no seu carro. Mas deve respeitar os índices mínimos de transmissão luminosa
                            determinados pelo CONTRAN - Conselho Nacional de Trânsito.
                        </p>
                        <p className="infoCard__text">
                            O uso de películas automotivas é regulamentado pela Resolução N° 254 de 26 de Outubro de 2007.
                        </p>
                        <a className="infoCard__text">
                            Clique aqui e conheça o texto desta resolução.
                        </a>
                    </div>
                    <div className="informationBox">
                        <div className="infoCard">
                            <div className="infoCard__left">
                                <img src={icon_paper} className="infoCard__img"/>
                            </div>
                            <div className="infoCard__right">
                                <h1 className="infoCard__title">
                                    Resolução N° 253,
                                </h1>
                                <h3 className="infoCard__date">
                                    26 de Outubro de 2007
                                </h3>
                                <p className="infoCard__subtitle">
                                    Dispõe sobre o uso de medidores de transmitância luminosa.
                                </p>
                            </div>
                        </div>
                        <div className="infoCard">
                            <div className="infoCard__left">
                                <img src={icon_paper} className="infoCard__img"/>
                            </div>
                            <div className="infoCard__right">
                                <h1 className="infoCard__title">
                                    Resolução N° 254,
                                </h1>
                                <h3 className="infoCard__date">
                                    26 de Outubro de 2007
                                </h3>
                                <p className="infoCard__subtitle">
                                    Estabelece requisitos para os vidros de segurança e critérios para aplicação de inscrições, pictogramas e películas nas áreas envidraçadas dos veículos automotores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoHalf">
                        <img className="infoHalf__img" src={megaphone}/>
                    </div>
                    <div className="infoHalf">
                        <h2 className="infoHalf__subtitle">Ainda com Dúvidas?</h2>
                        <h1 className="infoHalf__title">Usar cartão de crédito, boleto bancário...</h1>
                        <p className="infoHalf__text">Esta e outras perguntas podem ser respondidas pela nossa equipe de atendimento ou na seção de dúvidas do nosso site.</p>
                        <div className="infoHalf__iconBox">
                            <a className="infoHalf__icon" href={`${website}/contato`}>
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Information