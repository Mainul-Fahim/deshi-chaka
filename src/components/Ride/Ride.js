import React from 'react';
import { Link } from 'react-router-dom';
import '../Ride/Ride.css';

const Ride = (props) => {
   const{image,ride_name}=props.rideType;
    return (
        <div className="col-md-3 pl-5 pt-5 mt-5">
            <div className="ride">
                <img src={image} alt=""/>
                <h4><Link to="/about">{ride_name}</Link></h4>

            </div>
        </div>
    );
};

export default Ride;