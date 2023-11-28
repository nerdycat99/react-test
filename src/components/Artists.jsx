import React from 'react';
import { ARTISTS } from '../artists.js'
import workshop from '../assets/workshop.jpg';

export default function Artists() {

    return (
      <>
        <div class='some-page-wrapper'>
          <div class='row'>
            <div class='column'>
              <div class>
                {ARTISTS.map((artist) => {
                  return <p className="artist-list" key={artist.idx}>{artist.name}</p>
                })}
              </div>
            </div>
            <div class='double-column'>
              <div class='centered'>
                <img src={workshop} className="workshop-image" alt="logo" />
                <p className="image-footer-text"> Ruth Allen and Ben Edols in the workshop</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
