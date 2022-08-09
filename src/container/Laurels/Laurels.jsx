import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import AwardCard from './AwardCard';
import './Laurels.css';

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>

    {/* section for info */}
    <div className="app__wrapper_info">
      <SubHeading title='Awards & recognition'/>
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {/* loop over data here */}
        {data.awards.map((award) => (
          <AwardCard award={award} title={award.title} key={award.title}/>
        ))}
      </div>
      
    </div>

    {/* section for img */}
    <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
