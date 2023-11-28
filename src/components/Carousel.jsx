import React, { useState, useEffect } from 'react';
import { CAROUSEL_IMAGES, SMALL_CAROUSEL_IMAGES } from '../data.js'
import './Carousel.css'

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentSmallItem, setCurrentSmallItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem(Math.floor(Math.random() * ((CAROUSEL_IMAGES.length-1) + 1)));
      setCurrentSmallItem(Math.floor(Math.random() * ((SMALL_CAROUSEL_IMAGES.length-1) + 1)));
    }, 5000)
    
    return () => clearInterval(intervalId);
}, [])

  return (
    <article className='article'>
      <div className='carousel'>
        {CAROUSEL_IMAGES.map((item) => {
          return <img src={item.image} key={item.idx} className={item.idx === currentItem ? 'slide' : 'slide slide-hidden'} alt='...' />
        })}
        <p className='slide-text'>{CAROUSEL_IMAGES[currentItem].title}</p>
      </div>
      <div className='small-carousel'>
        {SMALL_CAROUSEL_IMAGES.map((item) => {
          return <img src={item.image} key={item.idx} className={item.idx === currentSmallItem ? 'slide' : 'slide slide-hidden'} alt='...' />
        })}
        <h1 className='small-slide-text'>{SMALL_CAROUSEL_IMAGES[currentSmallItem].title}</h1>
      </div>
    </article> 
  )
}
