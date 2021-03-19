import './App.css';
import React from "react";
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
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
