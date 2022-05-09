import React from 'react';
import Signup from '../components/login&signup/Signup';
import Login from '../components/login&signup/Login';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../components/login&signup/ForgotPassword';
import Header from './header & footer/Header';
import SingleUnit from './pages-components/SingleUnit';
import Fullpage from './FullPage';
import 'react-toastify/dist/ReactToastify.css';
import Siteplan from './pages-components/Siteplan';

const App = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        return (
            <>
                <BrowserRouter>
                    <AuthProvider>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={Fullpage} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/login' component={Login} />
                        <Route path='/forgot-password' component={ForgotPassword} />
                        <Route exact path='/:type' component={Siteplan} />
                        <Route exact path='/:type/:id' component={SingleUnit} />
                    </Switch>
                    </AuthProvider>
                </BrowserRouter>
            </>
        );
    } 

    return (
        <>
            <BrowserRouter basename={'/access'}>
                <AuthProvider>
                <Header />
                <Switch>
                    <PrivateRoute exact path='/' component={Fullpage} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Route path='/forgot-password' component={ForgotPassword} />
                    <Route exact path='/:type' component={Siteplan} />
                    <Route exact path='/:type/:id' component={SingleUnit} />
                </Switch>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
