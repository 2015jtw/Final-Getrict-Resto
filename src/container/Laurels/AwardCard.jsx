import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (

    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="award" />
        <div className="app__laurels_awards-card_content">
            <p className='p__cormorant' style={{color: '#DCCAB7'}}>{title}</p>
            <p className='p__cormorant'>{subtitle}</p>
        </div>
    </div>
)



export default AwardCard;