import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import PickRIde from './components/PickRide/PickRIde';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
  
  const [loggedInUser,setLoggedInUser]=useState({});
    return (
   
        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
            <Switch>
                <Route path="/header">
                    <Header></Header>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/signUp">
                   <SignUp></SignUp>
                </Route>
                <PrivateRoute path="/pickRide/:rideName">
                    <PickRIde></PickRIde>
                </PrivateRoute>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    
  );
}

export default App;
