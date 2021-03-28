import React from "react";
import Loan from "../Loan/Loan";

import "./PayLoan.css";

const PayLoan = () => {
    return (
        <section className="pay-loan">
            <Loan 
                status="accepted"
                amount="20,000"
            />

            <p className="pay-now">Pay Now</p>
        </section>
    )
}

export default PayLoan;