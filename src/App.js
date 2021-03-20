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

export const UserContext=createContext();

function App() {
  
  const [loggedInUser,setLoggedInUser]=useState({});
    return (
   
        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <p>name: {loggedInUser.name}</p>
        <Router>
            <Switch>
                <Route path="/header">
                    <Header></Header>
                </Route>
                <Route exact path="/">
                    <Header></Header>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/signUp">
                   <SignUp></SignUp>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    
  );
}

export default App;
