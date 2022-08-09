import React from 'react';

import './AboutUs.css';
import { images } from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    {/* background G letter */}
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g-letter' />
    </div>

    <div className="app__aboutus-content flex__center">

      {/* about us section */}
      <div className="app__aboutus-content_about">
        <h2 className='app__aboutus-h2'>About Us</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing
          ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      {/* knife img in the middle of this whole section */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife"></img>
      </div>

      {/* our history section */}
      <div className="app__aboutus-content_history">
        <h2 className='app__aboutus-h2'>Our History</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu
          volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec
          aliquet.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
