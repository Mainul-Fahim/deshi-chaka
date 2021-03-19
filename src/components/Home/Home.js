import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Data from '../../Data/Data.json';
import '../Home/Home.css';
import Ride from '../Ride/Ride';

const Home = () => {
    const [rideType,setRideType]=useState([]);
       useEffect(() =>{
           setRideType(Data);
           console.log(Data);
       },[])

    return (
        <div className="home">
            <Header></Header>
            <div className="row">
                {
                    rideType.map(rideType =><Ride rideType={rideType}></Ride>)
                }
            </div>
        </div>
    );
};

export default Home;