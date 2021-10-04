import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Courses.css';

const Courses = () => {
    // load data....
    const [carts, setcarts] = useState([]);
    // set data....
    useEffect( () => {
        fetch('./fulldata.JSON')
        .then(res => res.json())
        .then(data => setcarts(data));
    }, [])
    return (
        <div className="course-container">
            <div className="course-header">
            <h2>Courses</h2>
            <p>Home/Courses</p>
            </div>

            
          <div className="cart-section">
              {/* call  cart component */}
            {
                carts.map(cart => <Cart cart={cart}></Cart>)
            }
          </div>


        </div>
    );
};

export default Courses;