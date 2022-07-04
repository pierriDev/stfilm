
import { render } from "react-dom";
import Spinner from "react-activity/dist/Spinner";
import { FaTimes } from "react-icons/fa";
import "react-activity/dist/Spinner.css";

import "./LoadingIndicator.css"

export const LoadingIndicator = () => {
    return(
        <div className="loadingBody">
            <div className="loadingBox">
                <div className="loadingContent">
                    <Spinner color="#000" size={30}/>
                </div>
            </div>
        </div>
    )
}