import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Service.css";

const Service = (props) => {
    return (
        <div className="service">
            <FontAwesomeIcon className="service__icon" icon={`${props.iconName}`} />

            <p className="service__name">{props.serviceName}</p>
            
        </div>
    )
}

export default Service;