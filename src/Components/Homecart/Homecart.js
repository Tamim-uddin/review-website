import React from 'react';
import './Homecart.css';

const Homecart = (props) => {
    const {Cname, CourseImg, des, Tname, TeacherImg, time, price} = props.person;
    return (
        <div className="homecart">
            <div className="homecart-header">
              <img src={CourseImg} alt="" />
              <h2>{Cname}</h2>
              <p>{des}</p>
            </div>
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

export default Homecart;