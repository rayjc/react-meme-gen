import React from 'react';
import './Meme.css';

const Meme = ({ topText, botText, imgUrl, name }) => (
  <div className="Meme">
    <h3>{name}</h3>
    <div className="Meme-text Meme-top-text">{topText}</div>
    <img src={imgUrl} alt="created meme" />
    <div className="Meme-text Meme-bot-text">{botText}</div>
  </div>
)


export default Meme;