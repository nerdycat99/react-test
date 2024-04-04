import React from 'react';
import { ARTISTS } from '../artists.js'
import workshopImage from '../assets/ruth-allen-and-ben-edols-in-glass-workshop.jpg';

export default function Artists() {
  return (
    <>
      <div className='some-page-wrapper'>
      <h1 className="centered">We've changed our name to Glassroom</h1>
      <h2 className="centered">You can now find us at <a href="https://www.glassroom.com.au">glassroom.com.au</a> or we'll redirect you in a second</h2>
        <div className='row'>
          <div className='column'>
            <div>
              {ARTISTS.map((artist) => {
                return <p className="artist-list" key={artist.idx}>{artist.name}</p>
              })}
            </div>
          </div>
          <div className='double-column'>
            <div className='centered'>
              <img src={workshopImage} className="workshop-image" alt="Ruth Allen and Ben Edols in a glass workshop" />
              <p className="image-footer-text">Ruth Allen and Ben Edols in the workshop</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
