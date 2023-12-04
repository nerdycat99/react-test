import React from 'react';
import australianGlassArtAndGiftsShopMosman from '../assets/australian-glass-art-and-gifts-shop-mosman.jpg';
import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import email from '../assets/email.png';
import ph from '../assets/ph.png';

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
                <h3 className='contact-block-icons-bottom-margin'>contact us</h3>
                <a href="mailto:contact@australian-glass.com.au?body=Hello Australian Glass..."><img src={email} className="social-media-link" alt="contact@australian-glass.com.au"/></a>
                &nbsp; &nbsp;
                <a href="tel:+61 410 184 819"><img src={ph} className="social-media-link" alt="contact@australian-glass.com.au"/></a>
              </div>
            </div>
            <div className='column'>
              <div className='centered contact-text'>
                <h3 className='contact-blocks-bottom-margin'>visit us</h3>
                <p className='contact-blocks-top-margin'>{'Shop 9\n601 Military Road\nMosman 2088\nNSW'}</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered contact-text'>
                <h3 className='contact-blocks-bottom-margin'>opening times</h3>
                <p className='contact-blocks-top-margin'>{'Monday : Closed\nTuesday - Saturday : 10am - 5pm \nSunday : 10am - 4pm'}</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered'>
              <h3 className='contact-block-icons-bottom-margin'>follow us</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/australianglass_sydney/"><img src={insta} className="social-media-link" alt="instagram link" /></a>
              &nbsp; &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61554351860471&mibextid=LQQJ4d/"><img src={fb} className="social-media-link" alt="facebook link" /></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
