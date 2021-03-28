import React from "react";
import Loan from "../Loan/Loan";

import "./MyLoan.css";

const MyLoan = () => {
    return (
        <section className="my-loan">
            <Loan 
                status="accepted"
                amount="20,000"
            />

            <Loan 
                status="accepted"
                amount="10,000"
            />

            <Loan 
                status="declined"
                amount="40,000"
            />

            <Loan 
                status="declined"
                amount="60,000"
            />


        </section>
    )
}

export default MyLoan