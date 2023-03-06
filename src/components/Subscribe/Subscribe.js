import React from 'react';
import './Subscribe.scss';

export const Subscribe = () => {
  return (
    <div className='subscribe-main-container'>
    <div className='subscribe-container'>
        <h1 className='subscribe-title'>Stay Connected</h1>
        <div className='subscribe-input-container'>
            <input placeholder='Name' className='subscribe-input'/>
            <input placeholder='Company' className='subscribe-input'/>
            <input placeholder='Email' className='subscribe-input'/>
            <button className='subscribe-button'>Subscribe</button>
        </div>
    </div>
    </div>
  )
}
