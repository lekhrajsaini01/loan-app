import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import Home from "../components/Home/Home";
import LoanPage from "../components/LoanPage/LoanPage"
import Login from "../components/Login/Login"


import TestRoute from "./TestRoute";

/*
    This is used to control routing
*/    
const AppRouter = () => (
    <Router>
        <Switch>
            <TestRoute exact path="/home" component={Home} />

            <TestRoute exact path="/loan" component={LoanPage} />

            <TestRoute exact path="/" component={Login} />

        </Switch>
    </Router>
)

export default AppRouter;