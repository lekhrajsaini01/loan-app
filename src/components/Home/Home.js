import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Service from "../Service/Service"

import "./Home.css";

const Home = (props) => {

    return (
        <main className="home">
            <div className="profile">
                <div className="profile__details">
                    <div className="profile__circle">
                        <FontAwesomeIcon className="profile__image" icon="user" />
                    </div>
                    <p className="profile__text">Hello, Alonso</p>
                </div>

                <div className="notification">
                    <FontAwesomeIcon className="notification__bell" icon="bell" />
                    <p className="notification__number">11</p>
                </div>
            </div>

            <section className="advert">
                <div className="advert--1 advert--item">
                    <p>Wallet Balance</p>
                    <p>$70,500</p>
                </div>
                <div className="advert--2 advert--item">
                    <p>Savings Balance</p>
                    <p>$600,000</p>
                </div>
            </section>
            
            <section className="service__section">
                <p className="services__text">Services</p>

                <div className="services">
                    <Service iconName="eye" serviceName="Request Loan" />
                    <Service iconName="wallet" serviceName="Bills Payment" />
                    <Service iconName="suitcase" serviceName="Investment Platform" />
                </div>
            </section>

            <div className="get-started">
                <p className="get-started__text">
                    Invest in various plans<br /> and wait for your <br />income
                </p>
            </div>
        </main>
    )
}

export default Home;

