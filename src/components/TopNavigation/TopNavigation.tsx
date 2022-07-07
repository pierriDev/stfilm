import React from "react"

import { useTopNavigation } from "./TopNavigation.functions";
import './TopNavigation.css';

import Cart from "../Cart/Cart"

import logo from "../../assets/logo_simple.png"
import logoFull from "../../assets/logo_full.png"

import { website } from "../../constants/endpoints";

import type { TopNavigationType } from "./TopNavigation.types";


const TopNavigation = ({
    isLoggedIn = false,
    isHome = false,
}: TopNavigationType) => {
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
        isLogoFull,
    } = useTopNavigation(isHome);

    
    
    return(
        isLoggedIn ?  (
            <div></div>
        )
        :
            <div className="headerBox" style={ isHome? {backgroundColor: backgroundColor} : {backgroundColor: "white"}}>
                <div className="headerSection">
                    <a className="logoLink" href={website}>
                        <img src={!isLogoFull ? logo : logoFull}/>
                    </a>
                </div>
                <div className="headerSection headerNav">
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: firstTextColor}} onMouseEnter={toogleFirstHover} onMouseLeave={toogleFirstHover} href={`${website}/empresa`}>Empresa</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: secondTextColor}} onMouseEnter={toogleSecondHover} onMouseLeave={toogleSecondHover} href={`${website}/como-comprar`}>Como Comprar</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: thirdTextColor}} onMouseEnter={toogleThirdHover} onMouseLeave={toogleThirdHover} href={`${website}/produtos`}>Produtos</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: fourthTextColor}} onMouseEnter={toogleFourthHover} onMouseLeave={toogleFourthHover} href={`${website}/especificacao`}>Especificações</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text" style={{color: fifthTextColor}} onMouseEnter={toogleFifthHover} onMouseLeave={toogleFifthHover} href={`${website}/contato`}>Contato</a>
                    </div>
                </div>
                <div className="headerSection">
                    <Cart />
                </div>
            </div>
    )
}

export default TopNavigation