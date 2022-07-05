import { useSpecificationScreen } from "./SpecificationScreen.functions"

import { SpecificationType } from "../../components/Specification/Specification.types";

import { Modal } from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import Specification from "../../components/Specification/Specification"
import TopNavigation from '../../components/TopNavigation/TopNavigation';

import "./SpecificationScreen.css"

const SpecificationScreen = () => {
    const {
        mockSpecification,
        openModal,
        closeModal,
        showModal,
        modalText
    } = useSpecificationScreen();

    console.log(showModal)

    return (
        <>
            {showModal && (
                <Modal 
                    text={modalText}
                    closeModal={closeModal}
                />
            )}
            <div className="body">
                <TopNavigation />
                <div className="section specificationSection">
                    {mockSpecification.map((specification: SpecificationType) => (
                        <Specification
                            title={specification.title}
                            text={specification.text}
                            openModal={openModal}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SpecificationScreen