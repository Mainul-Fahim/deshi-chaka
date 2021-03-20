import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import '../PickRide/PickRide.css';

const PickRIde = () => {
   
    const {rideName}=useParams();
    return (
        <div >
           <Header></Header>
            <Row>
                <Col>
                    <div className="pick-ride-card mt-5">
                        <form>
                            <p>Pick From {rideName}</p>
                            <input type="search" name="pickFrom" id="" />
                            <p>Pick To</p>
                            <input type="search" name="pickTo" id="" />
                            <br/>
                            <input type="button" value="Submit"/>
                        </form>

                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default PickRIde;