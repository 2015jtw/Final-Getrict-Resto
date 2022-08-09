import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

// not sure 


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

    {/* menu title */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    {/* menu contents */}
    <div className="app__specialMenu-menu">

      {/* section for wine and beer */}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer </p>

        {/* wine and beer menu contents - left side */}
        <div className="app__specialMenu_menu_items">
          {/* map over data wine's array of objects to grab title, price */}
          {data.wines.map((wine, idx) => (
            <MenuItem key={wine.title + idx} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      {/* section for img - middle */}
      <div className="app__specialMenu-menu_img flex__center">
        <img src={images.menu} />
      </div>

      {/* section for cocktails - right side */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails </p>

        {/* wine and beer menu contents - left side */}
        <div className="app__specialMenu_menu_items">
          {/* map over data cocktails's array of objects to grab title, price */}
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem key={cocktail.title + idx} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* view more button */}
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
