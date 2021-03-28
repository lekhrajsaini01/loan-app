import React from "react";

import "./Login.css";

const Login = (props) => {

    const goHome = () => {
        props.history.push("/home")
    }

    return (
        <div className="login">
            <h1 onClick={goHome} className="bank__text">Bank of Spain</h1>

            <figure className="bank__figure">
                <img 
                    src="/img/image1.jpg" 
                    alt="Logo"
                    className="bank__img"
                />
            </figure>

            <p onClick={goHome} className="login__btn">Login</p>

            <p onClick={goHome} className="login__btn">Sign Up</p>


        </div>
    )
}

export default Login;
