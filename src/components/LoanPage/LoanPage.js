import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ApplyLoan from "../ApplyLoan/ApplyLoan";
import MyLoan from "../MyLoan/MyLoan";
import PayLoan from "../PayLoan/PayLoan";

import "./LoanPage.css";

const LoanPage = (props) => {

    const [loanPage, setLoanPage] = useState("myLoans");  // This variable is used to control what the loan page renders

    const [width, setWidth] = useState(window.innerWidth);  // This varible is used to save the width of the device
	const breakpoint = 656;
  

    /*
        We add an event handler when the component first mounts
    */     
	useEffect(() => {
	  const handleWindowResize = () => setWidth(window.innerWidth)
	  window.addEventListener("resize", handleWindowResize);
  
	  // Return a function from the effect that removes the event listener
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
  

    /*
        This function is used for controlling navigation on mobile view
    */    
    const goBack = () => {
        return props.history.goBack()
    }

    /*
        This sets the component that the loan page renders from the "my loan, apply and pay loan" nav
    */    
    const onSetPage = (value) => {
        setLoanPage(value)
    }

    /* 
        Anytime loanPage value changes, this function renders a different component
    */    
    const onChangePage = () => {
        switch(loanPage) {
            case("myLoans"):
                return <MyLoan />
            case("apply"):
                return <ApplyLoan />    
            case("pay"):
                return <PayLoan />    
            default:
                return <div></div>
        }
    }

    return (
        <section className="loan">
            {
                width < breakpoint ?
                <div onClick={goBack} className="go-back">
                    <FontAwesomeIcon className="go-back__font" icon="chevron-left" />
                    <p className="go-back__text">Back</p>
                </div> : <div></div>
            }

            <h1 className="loan__title">Loans</h1>

            <nav className="loan__nav">
                <p 
                    onClick={() => onSetPage("myLoans")} 
                    className={loanPage === "myLoans" ? "loan__nav--text loan__nav--active" : "loan__nav--text"}
                >
                    My Loans
                </p>
                <p 
                    onClick={() => onSetPage("apply")} 
                    className={loanPage === "apply" ? "loan__nav--text loan__nav--active" : "loan__nav--text" }
                >
                    Apply
                </p>
                <p 
                    onClick={() => onSetPage("pay")} 
                    className={loanPage === "pay" ? "loan__nav--text loan__nav--active" : "loan__nav--text"}
                >
                    Pay Loan
                </p>
            </nav>

            <div>
                {onChangePage()}
            </div>
        </section>
    )
}

export default LoanPage;
