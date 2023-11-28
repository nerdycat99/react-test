import React from 'react';
import shop from '../assets/shop.jpg';
import insta from '../assets/insta.png';

export default function ContactPane() {

    return (
      <>
        <div class='some-page-wrapper'>
          <div class='row'>
            <div class='column'>
              <div class='centered'>
                <img src={shop} className="shop-image" alt="logo" /> 
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='column'>
              <div class='centered'>
                <h3>contact us</h3>
                <p><a href="mailto:contact@australian-glass.com.au?body=Hello Australian Glass...">contact@australian-glass.com.au</a></p>
                <p>+61 410 184 819</p>
              </div>
            </div>
            <div class='column'>
              <div class='centered contact-text'>
                <h3>visit us</h3>
                <p>Shop 9</p>
                <p>601 Military Road</p>
                <p>Mosman 2088 NSW</p>
              </div>
            </div>
            <div class='column'>
              <div class='centered'>
              <h3>follow us</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/australianglass_sydney/"><img src={insta} className="insta-link" alt="logo" /></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
