import { useSpecificationScreen } from "./SpecificationScreen.functions"

import { SpecificationType } from "../../components/Specification/Specification.types";

import Footer from '../../components/Footer/Footer';
import Specification from "../../components/Specification/Specification"
import TopNavigation from '../../components/TopNavigation/TopNavigation';

import "./SpecificationScreen.css"

const SpecificationScreen = () => {
    const {
        mockSpecification
    } = useSpecificationScreen();

    return (
        <div className="body">
            <TopNavigation />
            <div className="section specificationSection">
                {mockSpecification.map((specification: SpecificationType) => (
                    <Specification
                        title={specification.title}
                        text={specification.text}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SpecificationScreen