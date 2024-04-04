import React from 'react';
import australianGlassArtAndGiftsShopMosman from '../assets/australian-glass-art-and-gifts-shop-mosman.webp';
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
              <h1 className="centered">We've changed our name to Glassroom</h1>
              <h2 className="centered">You can now find us at <a href="https://www.glassroom.com.au">glassroom.com.au</a></h2>
              <h2 className="centered">You can still find the same beautiful glass art and gifts from Australia and New Zealand's leading glass artists online and at our fabulous new Mosman store</h2>
              <h3 className="centered">You can click the link above or we'll redirect you in a few seconds...</h3>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <div className='row'>
            <div className='column'>
              <div className='centered'>
                <h3 className='contact-block-icons-bottom-margin'>contact us</h3>
                <a href="mailto:contact@glassroom.com.au?body=Hello Glassroom..."><img src={email} className="social-media-link" alt="contact@glassroom.com.au"/></a>
                &nbsp; &nbsp;
                <a href="tel:+61 410 184 819"><img src={ph} className="social-media-link" alt="contact@australian-glass.com.au"/></a>
              </div>
            </div>
            <div className='column'>
              <div className='centered contact-text'>
                <h3 className='contact-blocks-bottom-margin'>visit us</h3>
                <p className='contact-blocks-top-margin'>{'Shop 7\n573 Military Road\nMosman 2088\nNSW'}</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered contact-text'>
                <h3 className='contact-blocks-bottom-margin'>opening times</h3>
                <p className='contact-blocks-top-margin'>{'Monday : Closed\nTuesday - Saturday : 10am - 5pm \nSunday : 11am - 4pm'}</p>
              </div>
            </div>
            <div className='column'>
              <div className='centered'>
              <h3 className='contact-block-icons-bottom-margin'>follow us</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/glassroom_sydney/"><img src={insta} className="social-media-link" alt="instagram link" /></a>
              &nbsp; &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61554351860471&mibextid=LQQJ4d/"><img src={fb} className="social-media-link" alt="facebook link" /></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
