import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import '../SignUp/SignUp.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}
const SignUp = () => {

    const history=useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
        error: '',
        success: false

    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }

        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    //var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    updateUserInfo(user.name);
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    //var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    history.replace(from);
                });
        }
        e.preventDefault();
    }
    const updateUserInfo = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

              
                var token = credential.accessToken;
                // The signed-in user info.
                const {displayName,email} = result.user;
                const signedInUser={name:displayName,email};
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }
    return (
        <div>
            <Header></Header>
            <div className="sign-up-form">
                <form onSubmit={handleSubmit}>
                    {newUser && <h4>Create an Account</h4>}
                    {newUser && <input type="text" name="name" placeholder="Name" required />}
                    <br />
                    <input type="text" name="email" placeholder="Username or Email" required onBlur={handleChange} />
                    <br />
                    <input type="password" name="password" placeholder="Password" required onBlur={handleChange} />
                    <br />
                    {newUser && <input type="password" name="confirm password" placeholder="Confirm Password" required onBlur={handleChange} />}
                    <br />
                    {/* <Button variant="success">Create an account</Button> */}
                    <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                    <br />
                    <Row>
                        <Col>
                            <p>Don't have an account?</p>
                        </Col>
                        <Col>
                            <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
                            <label htmlFor="newUser">Sign Up</label>
                        </Col>
                    </Row>
                </form>
                <br />
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'logged in'} successfully</p>
                }
            </div>
        </div>
    );
};

export default SignUp;