import React, { useEffect, useState } from 'react';
import External from '../External/External';
import Homecart from '../Homecart/Homecart';
import './Home.css';

const Home = () => {
    const [persons, setpersons] = useState([])
    useEffect( () => {
        fetch('./info.JSON')
        .then(res => res.json())
        .then(data => setpersons(data));
    }, [])

    return (
        <div>
          <External></External>
          <div className="main-container">
              <div className="main-header">
                 <h2>Latest Courses</h2>
              </div>             
           <div className="main-feet">
              {
               persons.map(person => <Homecart person={person}></Homecart>)
              }
           </div>

          </div>
        </div>
    );
};

export default Home;