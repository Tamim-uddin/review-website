import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // destructuring.....
    const {Cname, CourseImg, des, Tname, TeacherImg, time, price} = props.cart;
    return (
        // cart uper-site
        <div className="cart">
        <div className="homecart-header">
          <img src={CourseImg} alt="" />
          <h2>{Cname}</h2>
          <p>{des}</p>
        </div>
        {/* cart lower-site */}
        <div className="homecart-last">
           <div className="pic-part">
             <img src={TeacherImg} alt="" />
             <h4>{Tname}</h4>
           </div>
            <div className="text-side">
             <p>{time}</p>
             <p className="dollar">${price}</p>
            </div>
        </div>
    </div>
    );
};

export default Cart;