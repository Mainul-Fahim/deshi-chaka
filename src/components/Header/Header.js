import React from 'react';
import { Button,Col,Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Deshi-Chaka-logo.png';
import '../Header/Header.css';
const Header = () => {
    return (
        <div>
            <Row>
                <Col className="header-logo">
                    <img src={Logo} alt=""/>
                </Col>
                <Col>
                <Nav fill variant="pills" className="justify-content-end mt-4 mr-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Destination</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/signUp">Login</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav></Col>
            </Row>
        </div>
    );
};

export default Header;