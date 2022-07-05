import icon_paper from "../../assets/icon_paper.png";
import { SpecificationType } from "./Specification.types";

import "./Specification.css"

const Specification = ({
    title,
    text,
    openModal,
}: SpecificationType) => {
    return (
        <div className="specificicationBox">
            <div className="specificationImage">
                <img src={icon_paper} className="specificationImg" />
            </div>
            <div className="specificationInfo">
                <h1 className="specificationTitle">{title}</h1>
                <p className="specificationText">{text}</p>
                <div className="specificationButton">
                    <a className="specificationBtn" onClick={() => openModal()}>
                        Certificado de Garantia
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Specification