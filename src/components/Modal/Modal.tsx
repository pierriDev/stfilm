import type { ModalTypes } from "./Modal.types";

import { FaTimes } from "react-icons/fa";

import "./Modal.css"

export const Modal = ({
    text,
    closeModal
}: ModalTypes) => {
    return(
        <div className="modalBody">
            <div className="modalBox">
                <div className="modalHeader">
                    <a className="modalHeader__btn" onClick={() => closeModal()}>
                        <FaTimes />
                    </a>
                </div>
                <div className="modalContent">
                    {text?.map((singleText: any) => (
                        <p className="modalText">
                            {singleText.text}
                        </p>
                    ) )}
                </div>
            </div>
        </div>
    )
}