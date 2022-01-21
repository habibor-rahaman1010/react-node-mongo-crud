import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Home from "../components/Home/Home";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import Users from "../components/Users/Users";
import Header from '../components/Header/Header';
import AuthProvider from '../ContextAPI/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/users">
                            <Users></Users>
                        </Route>
                        <Route exact path="/users/add">
                            <AddUser></AddUser>
                        </Route>
                        <Route exact path="/users/update/:id">
                            <UpdateUser></UpdateUser>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default Main;