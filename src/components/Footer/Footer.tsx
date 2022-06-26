
import './Footer.css';

import logo from "../../assets/logos_footer/logo_footer.png"
import american from "../../assets/logos_footer/american.png";
import boleto from "../../assets/logos_footer/boleto.png";
import diners from "../../assets/logos_footer/diners.png";
import hipercard from "../../assets/logos_footer/hipercard.png";
import mastercard from "../../assets/logos_footer/mastercard.png";
import pagseguro from "../../assets/logos_footer/pagseguro.png";
import visa from "../../assets/logos_footer/visa.png";

const Footer = () => {
    return(
        <>
            <div className="logoCard">
                <div className="sectionFooter">
                    <div className="logoCardBox">
                        <img src={visa} className="logoCardImage"/>
                        <img src={mastercard} className="logoCardImage"/>
                        <img src={diners} className="logoCardImage"/>
                        <img src={hipercard} className="logoCardImage"/>
                        <img src={american} className="logoCardImage"/>
                        <img src={boleto} className="logoCardImage"/>
                        <img src={pagseguro} className="logoCardImage"/>
                    </div>
                </div>
            </div>
            <div className='infoBox'>
                <div className='infoBoxSection'>
                    <div className='infoBox--image'>
                        <img src={logo} className='infoBox--image--img'/>

                    </div>
                    <p className='infoBox--address'>
                        Rua João Chede, 2141 | Cidade Industrial | Curitiba, PR
                    </p>
                    <p className='infoBox--phone'>
                        (41) 3333-0193 | (41) 3333-0192
                    </p>
                    <p className='infoBox--email'>
                        stfilm@stfiml.com.br
                    </p>
                    <p className='infoBox--copyright'>
                        © 2022 Katsu Web. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;