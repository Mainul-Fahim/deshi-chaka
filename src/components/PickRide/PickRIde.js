import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Map from '../Map/Map';
import '../PickRide/PickRide.css';
import Data from '../../Data/Data.json';

const PickRIde = () => {
    const [form,setForm] =useState(true);
    const {rideName}=useParams();
    const [dataDetails,setDataDetails]=useState([]);
    const [rideDetails,setRideDetails]=useState([]);
    useEffect(() =>{
        setDataDetails(Data);
        
    },[])
    useEffect(() =>{
        const details=dataDetails.filter(ride=>ride.ride_name===rideName);
        setRideDetails(details);
    },[rideDetails])
    
    return (
        <div >
           <Header></Header>
            <Row>
                <Col>
                    {form ? <div className="pick-ride-card mt-5">
                        <form>
                            <p>Pick From {rideName}</p>
                            <input type="search" name="pickFrom" id="" />
                            <p>Pick To</p>
                            <input type="search" name="pickTo" id="" />
                            <br/>
                            <input onClick={()=>setForm(false)} type="button" value="Search"/>
                        </form>

                    </div> :
                    <div className="pick-ride-card mt-5">
                        <h5>Type: {rideName}</h5>
                        {
                            rideDetails.map(ride=><div className="ride-details">
                                <img src={ride.image} alt=""/>
                                <p>{ride.ride_name}</p>
                                <p>{ride.capacity}</p>
                                <p>{ride.price}</p>
                            </div>)
                        }
                    </div>}
                </Col>
                <Col><Map></Map></Col>
            </Row>
        </div>
    );
};

export default PickRIde;