
import { useContactScreen } from "./Contact.functions"

import { AlertCard } from "../../components/AlertCard/AlertCard";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import Footer from "../../components/Footer/Footer";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

import contactBanner from "../../assets/contact/contact_banner.png"
import InputMask from "react-input-mask";

import "./Contact.css";
const ContactScreen = () => {
    const {
        name,
        company,
        phone,
        message,
        onInputChange,
        isLoading,
        showReturn,
        returnType,
        returnMessage,
        submit,
        closeAlert
    } = useContactScreen();
    return(
        <div className="body">
            <TopNavigation />
            {isLoading && (
                <LoadingIndicator />
            )}
            <div className="section contactSection">
                {showReturn && (
                    <AlertCard 
                        text={ returnMessage }
                        type={ returnType }
                        handleClose={ closeAlert }
                    />
                )}
                <div className="contact__box">
                    <div className="contact__box--half">
                        <h2 className="contact__box--subtitle">Contato</h2>
                        <h1 className="contact__box--title">Fale conosco e entraremos em contato</h1>
                        <div className="contact__box--info">
                            <p className="contact__box--info--subtitle">ENDEREÇO</p>
                            <p className="contact__box--info--text">Rua João Chede, 2141 | Cidade Industrial | Curitiba, PR</p>
                        </div>
                        <div className="contact__box--info">
                            <p className="contact__box--info--subtitle">E-MAIL</p>
                            <p className="contact__box--info--text">stfilm@stfilm.com.br</p>
                        </div>
                        <div className="contact__box--info">
                            <p className="contact__box--info--subtitle">TELEFONE</p>
                            <p className="contact__box--info--text">(41) 3333-0193 | (41) 3333-0192</p>
                        </div>
                    </div>
                    <div className="contact__box--half">
                        <div className="contact__box--inputBox">
                            <input type="text" className="contact__box--input" name="name" placeholder="Nome" value={name} onChange={onInputChange}></input>
                        </div>
                        <div className="contact__box--inputBox">
                            <input type="text" className="contact__box--input" name="company" placeholder="Empresa" value={company} onChange={onInputChange}></input>
                        </div>
                        <div className="contact__box--inputBox">
                            <InputMask mask="(99) 99999-9999" maskPlaceholder={null} className="contact__box--input" name="phone" placeholder="Telefone" value={phone} onChange={onInputChange}></InputMask>
                        </div>
                        <div className="contact__box--inputBox">
                            <textarea className="contact__box--textarea" name="message" placeholder="Mensagem" value={message} onChange={onInputChange}></textarea>
                        </div>
                        <div className="contact__box--buttonBox">
                            <a className="contact__box--btn" onClick={() => submit()} >Enviar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__banner">
                <img src={contactBanner} className="contact__banner--img"/>
                <h1 className="contact__banner--txt">Empresa</h1>
            </div>
            <div className="section contactRowSection">
                <div className="contact__row">
                    <div className="contact__col">
                        <h1 className="contact__col--title">A ST FILM</h1>
                        <p className="contact__col--txt">
                            Surgiu em 2004 devido ao reconhecimento do crescente mercado de películas de proteção solar, e produtos de qualidade.
                        </p>
                    </div>
                    <div className="contact__col">
                        <h1 className="contact__col--title">Diversidade</h1>
                        <p className="contact__col--txt">
                        A experiência acumulada nestes anos fez a empresa ampliar sua linha de produtos, apresentando novos itens.
                        </p>
                    </div>
                    <div className="contact__col">
                        <h1 className="contact__col--title">Equipe</h1>
                        <p className="contact__col--txt">
                            Busca do aperfeiçoamento logístico, segurança e garantia de nossos produtos visando bom atendimento e respeito ao cliente.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactScreen;