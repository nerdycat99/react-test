import React from 'react';
import australianGlassArtAndGiftsShopMosman from '../assets/australian-glass-art-and-gifts-shop-mosman.jpg';
import insta from '../assets/insta.png';

export default function ContactPane() {

    return (
      <>
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='centered'>
                <img src={australianGlassArtAndGiftsShopMosman} className="shop-image" alt="Australian Glass Art And Gifts Shop Military Road Mosman" /> 
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <div className='centered'>
                <h3>contact us</h3>
                <p><a href="mailto:contact@australian-glass.com.au?body=Hello Australian Glass...">contact@australian-glass.com.au</a></p>
                <p>+61 410 184 819</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered contact-text'>
                <h3>visit us</h3>
                <p>{'Shop 9\n601 Military Road\nMosman 2088\nNSW'}</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered'>
              <h3>follow us</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/australianglass_sydney/"><img src={insta} className="insta-link" alt="logo" /></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
