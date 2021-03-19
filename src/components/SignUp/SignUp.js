import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../SignUp/SignUp.css';

const SignUp = () => {
    return (
        <div>
            <Header></Header>
           <div className="sign-up-form">
                <h4>Create an Account</h4>
                <input type="text" placeholder="Name"/>
                <br/>
                <input type="text" placeholder="Username or Email"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <input type="password" placeholder="Confirm Password"/>
                <br/>
                <Button variant="success">Create an account</Button>
                <br/>
                <Row>
                    <Col>
                        <p>Already have an account?</p>
                    </Col>
                    <Col>
                    <Link to="/signUp">Login</Link>
                    </Col>
                </Row>

           </div>
        </div>
    );
};

export default SignUp;