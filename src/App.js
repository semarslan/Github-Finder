import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import GithubState from "./state/GithubState";
import AlertState from "./state/AlertState";
import Navbar from "./components/home/Navbar";
import Alert from "./components/component/Alert";
import About from "./components/home/About";
import UserDetails from "./components/user/UserDetails";
import NotFound from "./components/component/NotFound";


const App = () => {

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <Alert/>

                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/about"} component={About}/>
                        <Route path={"/user/:login"} component={UserDetails}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App;