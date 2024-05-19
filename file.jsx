import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const card = (
  <div className="card" style={{ width: '5.8in', height: '8.3in' }}>
    <h1 style={{ color: '#FF0000' }}>Happy Birthday!</h1>
    <p style={{ color: '#000000' }}>You're another year older!</p>
    <p style={{ color: '#000000' }}>Join me for a celebration of love, laughter, and adventure.</p>
    <p style={{ color: '#FF0000' }}>Theme: Black and Red</p>
    <p style={{ color: '#000000' }}>Venue: Karen Plains Road, Valeta Close House Number 203</p>
    <p style={{ color: '#000000' }}>Arrival Time: 1:00 P.M on Saturday 25th of May 2024</p>
    <img src="birthday-cake.jpg" alt="Birthday Cake" style={{ width: '50%', height: '50%', margin: '20px auto' }} />
  </div>
);

ReactDOM.render(card, document.getElementById('root'));