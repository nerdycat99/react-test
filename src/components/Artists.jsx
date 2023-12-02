import React from 'react';
import { ARTISTS } from '../artists.js'
import workshopImage from '../assets/ruth-allen-and-ben-edols-in-glass-workshop.jpg';

export default function Artists() {
  return (
    <>
      <div className='some-page-wrapper'>
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
