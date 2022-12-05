import React from "react";
import Signup from "../components/login&signup/Signup";
import Login from "../components/login&signup/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../components/login&signup/ForgotPassword";
import Header from "./header & footer/Header";
import Fullpage from "./FullPage";
import "react-toastify/dist/ReactToastify.css";
import Siteplan from "./pages-components/Siteplan";
import Error from "./pages-components/Error";

const App = () => {
    return (
        <>
            <BrowserRouter basename={'/access'}>
            {/* <BrowserRouter> */}
                <Header />
                <Switch>
                    <PrivateRoute exact path="/" component={Fullpage} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/units/:type" component={Siteplan} />
                    {/* <Route path="/:type/:id" component={SingleUnit} /> */}
                    <Route path="*" component={Error} />                            
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
