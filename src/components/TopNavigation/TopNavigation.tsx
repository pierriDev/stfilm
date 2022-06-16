import React from "react"
import './TopNavigation.css';
import logo from "../../assets/logo_simple.png"

const TopNavigation = ({
    isLoggedIn = false
}: any) => {
    return(
        isLoggedIn ?  (
            <div></div>
        )
        :
            <div className="headerBox">
                <div className="headerSection">
                    <a className="logoLink">
                        <img src={logo} />
                    </a>
                </div>
                <div className="headerSection headerNav">
                    <div className="headerLink">
                        <a className="headerLink__text">Empresa</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text">Como Comprar</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text">Produtos</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text">Especificações</a>
                    </div>
                    <div className="headerLink">
                        <a className="headerLink__text">Contato</a>
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