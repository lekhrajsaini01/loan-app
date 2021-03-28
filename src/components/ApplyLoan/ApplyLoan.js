import React, {useState} from "react";

import "./ApplyLoan.css";

const ApplyLoan = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [loanInterval, setLoanInterval] = useState(3)
    const [interestState, setInterestState] = useState(5)
    const [EMIValue, setEMIValue] = useState(0)


    /*
        THIS IS CALLED WHEN A USER SELECTS LOAN AMOUNT USING THE SLIDER
    */    
    const onLoanAmountChange = (e) => {
        setLoanAmount(e.target.value)
    }


    /*
        THIS IS CALLED WHEN A USER SELECTS LOAN INTERVAL USING THE SLIDER
    */  
    const onSetLoanInterval = (e) => {
        setLoanInterval(e.target.value)
    }

    /*
        THIS IS CALLED WHEN A USER SELECTS INTEREST RATE USING THE SLIDER
    */ 
    const onSetInterestState = (e) => {
        setInterestState(e.target.value)
    }

    /* 
        THIS FUNCTION IS CALLED WHEN A USER CLICKS THE "Calculate Button"
    */    
    const calculteEMI = () => {
        let principal = loanAmount;
        let interestRate = (interestState) / (12 * 100);
        let duration = loanInterval * 12;

        const emi = principal * interestRate * (((1+ interestRate)**duration) / ((1+ interestRate)**duration - 1))

        setEMIValue(parseInt(emi))
    }

    return (
        <div className="apply-loan">
            <div className="select-amount">
                <p className="select-amount--text">Select Loan Amount</p>
                <p className="select-amount--slider">Move the slider to select your loan amount</p>

                <p className="loan-amount">${loanAmount}</p>

                <div className="slider-control">
                    <p className="slider-control--text">$50,000</p>
                    <input 
                        id="typeinp" 
                        type="range" 
                        min="50000" max="1000000" 
                        value={loanAmount} 
                        onChange={onLoanAmountChange}
                        step="50000"
                        className="apply-loan__slide"
                    />
                    <p className="slider-control--text">$1,000,000</p>
                </div>
            </div>

            <div className="select-amount">
                <p className="select-amount--text">Select Loan Interval</p>
                <p className="select-amount--slider">Move the slider to select your loan interval</p>

                <p className="loan-amount">{loanInterval}</p>

                <div className="slider-control">
                    <p className="slider-control--text">1 year</p>
                    <input 
                        id="typeinp" 
                        type="range" 
                        min="1" max="10" 
                        value={loanInterval} 
                        onChange={onSetLoanInterval}
                        step="1"
                        className="apply-loan__slide"
                    />
                    <p className="slider-control--text">10 years</p>
                </div>
            </div>


            <div className="select-amount">
                <p className="select-amount--text">Select Interest</p>
                <p className="select-amount--slider">Move the slider to select your interest</p>

                <p className="loan-amount">{interestState}</p>

                <div className="slider-control">
                    <p className="slider-control--text">1%</p>
                    <input 
                        id="typeinp" 
                        type="range" 
                        min="1" max="20" 
                        value={interestState} 
                        onChange={onSetInterestState}
                        step="1"
                        className="apply-loan__slide"
                    />
                    <p className="slider-control--text">20%</p>
                </div>
            </div>

            <div className="calculate-emi">
                <p onClick={calculteEMI} className="calculate-emi--btn">Calculate EMI</p>
                <p className="calculate-emi--value">${EMIValue}</p>
            </div>

        </div>
    )
}

export default ApplyLoan