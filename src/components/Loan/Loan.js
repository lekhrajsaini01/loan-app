import React from "react";
import "./Loan.css";

const Loan = (props) => {
    return (
        <div className="loan-item">
            <div className={props.status}></div>

            <div className="loan-item__info">
                <p className={`loan-item__status ${props.status}-color`}>{props.status}</p>
                <p className="loan-item__amount">${props.amount}</p>
                <p className="loan-item__duration">To be payed back in 5 years with a interest of $8000</p>
            </div>
        </div>
    )
}

export default Loan;