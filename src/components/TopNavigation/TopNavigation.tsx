import React from "react"

import { useTopNavigation } from "./TopNavigation.functions";
import './TopNavigation.css';

import logo from "../../assets/logo_simple.png"

const TopNavigation = ({
    isLoggedIn = false
}: any) => {
    const {
        backgroundColor,
        firstTextColor,
        secondTextColor,
        thirdTextColor,
        fourthTextColor,
        fifthTextColor,
        toogleFirstHover,
        toogleSecondHover, 
        toogleThirdHover,
        toogleFourthHover,
        toogleFifthHover,
    } = useTopNavigation();

    
    
    return(
        isLoggedIn ?  (
            <div></div>
        )
        :
            <div className="headerBox" style={{backgroundColor: backgroundColor}}>
                <div className="headerSection">
                    <a className="logoLink">
                        <img src={logo} />
                    </a>
                </div>
                <div className="headerSection headerNav">
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: firstTextColor}} onMouseEnter={toogleFirstHover} onMouseLeave={toogleFirstHover}>Empresa</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: secondTextColor}} onMouseEnter={toogleSecondHover} onMouseLeave={toogleSecondHover}>Como Comprar</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: thirdTextColor}} onMouseEnter={toogleThirdHover} onMouseLeave={toogleThirdHover}>Produtos</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: fourthTextColor}} onMouseEnter={toogleFourthHover} onMouseLeave={toogleFourthHover}>Especificações</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: fifthTextColor}} onMouseEnter={toogleFifthHover} onMouseLeave={toogleFifthHover}>Contato</a>
                    </div>
                </div>
                <div className="headerSection">
                    <div className="cartBackground">
                        <div className="cartQuantity"><span>0</span></div>
                        <a>C</a>
                    </div>
                    <a className="loginButton">Entrar</a>
                </div>
            </div>
    )
}

export default TopNavigation