import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuItem'>
    <div className="app__menuItem-head">
      {/* create template for menu item title */}
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>{title}</p>
      </div>

      {/* create the dash between title and price */}
      <div className='app__menuItem-dash' />

      {/* create template for menu item price */}
      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>

    </div>

    {/* create template for menu item tag */}
    <div className="app__menuItem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>{tags}</p>
    </div>


  </div>
);

export default MenuItem;
