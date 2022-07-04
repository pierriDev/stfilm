import type { AlertCardType } from "./AlertCard.types";

import { FaTimes } from "react-icons/fa";
import "./AlertCard.css";

export const AlertCard = ({
    text,
    type,
    handleClose
}: AlertCardType) => {
    let background = ""
    if(type === "error"){
        background = "#b30000"
    }else if(type === "success"){
        background = "#197419"
    }
    return (
        <div className="alertBox" style={{backgroundColor: background}}>
            <div className="alertBox__close">
                <a className="alertBox__close--btn" onClick={() => handleClose()}>
                    <FaTimes />
                </a>
            </div>
            <p className="alertBox__text">
                { text }
            </p>
        </div>
    )
}