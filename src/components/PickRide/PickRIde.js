import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Map from '../Map/Map';
import '../PickRide/PickRide.css';
import Data from '../../Data/Data.json';
import icon from '../../Images/peopleicon.png';

const PickRIde = () => {
    const [form,setForm] =useState(true);
    const {rideName}=useParams();
    const [dataDetails,setDataDetails]=useState([]);
    const [rideDetails,setRideDetails]=useState([]);
    const [pickFrom,setPickFrom]=useState('');
    const [pickTo,setPickTo]=useState('');
    useEffect(() =>{
        setDataDetails(Data);
        
    },[dataDetails])
    useEffect(() =>{
        const details=dataDetails.filter(ride=>ride.ride_name===rideName);
        setRideDetails(details);
    },[rideDetails])
    
    const handleChange=(e) =>{
        if(e.target.name==='pickFrom'){
             setPickFrom(e.target.value);
        }
        if(e.target.name==='pickTo'){
            setPickTo(e.target.value);
        }
    }
    return (
        <div >
           <Header></Header>
            <Row>
                <Col>
                    {form ? <div className="pick-ride-card mt-5">
                        <form>
                            <br/>
                            <p>Pick From</p>
                            <input type="search" name="pickFrom" id="" placeholder="Pick From" onBlur={handleChange} />
                            <br/>
                            <p>Pick To</p>
                            <input type="search" name="pickTo" id="" placeholder="Pick To" onBlur={handleChange} />
                            <br/>
                            <input style={{backgroundColor:'green',color:'white'}} onClick={()=>setForm(false)} type="button" value="Search"/>
                        </form>

                    </div> :
                    <div className="pick-ride-card mt-5">
                        <div className="from-to">
                            <h4>{pickFrom}</h4>
                            <h4>{pickTo}</h4>
                        </div>
                        {
                            
                            rideDetails.map(ride=><div className="ride-details">
                                <img src={ride.image} alt=""/>
                                <p>{ride.ride_name}</p>
                                <img src={icon} alt=""/>
                                <p>{ride.capacity}</p>
                                <p>{ride.price}</p>
                            </div>)
                        }
                    </div>}
                </Col>
                <Col><div className="map"><Map></Map></div></Col>
            </Row>
        </div>
    );
};

export default PickRIde;