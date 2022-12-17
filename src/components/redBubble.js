import React from 'react';
import Button from './button';
import './redBubble.scss';
import NoicestProgrammerTee from '../images/coding-in-progress-sticker.jpg';
import WitchCoffeeCoaster from '../images/witch-coffee-coaster.jpg';
import CodingTeaSticker from '../images/kawaii-coding-tea-sticker.jpeg';
import CodingBabySticker from '../images/coding-baby-sticker.jpg';

export default () => (
  <div className="redbubble__container">
    <div className="redbubble__left">
      <div className="redbubble__product-one" src={NoicestProgrammerTee}  />
      <div className="redbubble__product-two" src={WitchCoffeeCoaster} />
      <div className="redbubble__product-three" src={CodingTeaSticker} />
      <div className="redbubble__product-four" src={CodingBabySticker} />
    </div>
    <div className="redbubble__right">
      <h2 className="redbubble__heading">
        Check us out on RedBubble
      </h2>
      <p className="redbubble__content">
        This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
      </p>
      <Button text="Visit Store" variant="yellow" />
    </div>
  </div>
);