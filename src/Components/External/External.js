import React from 'react';
import './External.css';

const External = () => {
    return (
        <div className="external-container">
            {/* external header */}
            <div>
             <h3>Get Quote</h3>
             <p>Find the price of your ideal course</p>  
          </div>
          <div>
             <h3>Ask a Question</h3>
             <p>Not sure what you need? Ask our Advisors</p>  
          </div>
          <div>
             <h3>Join Today</h3>
             <p>Sing Up Now for a Free 30 Day Trial</p>  
          </div>
        </div>
    );
};

export default External;