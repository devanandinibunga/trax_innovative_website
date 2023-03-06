import React from 'react';
import './PeoplesSay.scss';
import { Rate } from 'antd';

export const PeoplesSay = () => {
   
  return (
    <div className='people-says-container'>
        <div className='people-says-top-container'>
            <div className='people-says-top-details-container'>
                <p>Quisque tellus risus, adipisci</p>
                <h1>What People Say</h1>
            </div>
        </div>
        <div id="carouselExample" className="carousel slide carousel-fade peoples-say-carousel-container">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className='people-says-carousel-left-container'>
                <img src="https://trax.acrothemes.com/bootstrap-v5/images/testimonial-1.jpg" alt="/" className='peoples-say-carousel-image'/>
                <p className="">John Smith</p>
                <p className="legend">UP WORK, New York</p>
              </div>
              <div className='people-says-carousel-right-container'>
                <p className="curosal-matter">
                We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.
                </p>
                <Rate defaultValue={5} className="peoples-says-rate"/>
             </div>
            </div>
            <div className="carousel-item">
              <div className='people-says-carousel-left-container'>
              <img src="https://trax.acrothemes.com/bootstrap-v5/images/testimonial-2.jpg" alt="/" className='peoples-say-carousel-image' />
              <p className="legend">Kevin Miller</p>
              <p className="legend">Envato, Australia</p>
              </div>
              <div className='people-says-carousel-right-container'>
              <p className="curosal-matter">
              Trax is a company that provides tools to help professional event planning and execution, and their customers are very happy folks! The thing I love about their customer testimonial page provides content formats.
              </p>
              <Rate defaultValue={4} className="peoples-says-rate"/>
              </div>
            </div>
            <div className="carousel-item">
              <div className='people-says-carousel-left-container'>
                <img src="https://trax.acrothemes.com/bootstrap-v5/images/testimonial-3.jpg" alt="/" className='peoples-say-carousel-image' />
                <p className="legend">Alina Johanson</p>
                <p className="legend">Intel, Sidney</p>
              </div>
              <div className='people-says-carousel-right-container'>
                <p className="curosal-matter">
                Startup Institute is a career accelerator that allows professionals to learn new skills, take their careers in a different direction, and pursue a career they are passionate about that have completed the program.
                </p>
                <Rate defaultValue={5} className="peoples-says-rate"/>
              </div>  
            </div>
            <div className="carousel-item">
              <div className='people-says-carousel-left-container'>
                <img src="https://trax.acrothemes.com/bootstrap-v5/images/testimonial-4.jpg" alt="/" className='peoples-say-carousel-image'/>
                <p className="legend">Hayden Wood</p>
                <p className="legend">FIVERR,Italy</p>
              </div>
              <div className='people-says-carousel-right-container'>
                <p className="curosal-matter">
                Trax’s customer testimonial page is another beauty. Its simple design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.
                </p>
                <Rate defaultValue={4} className="peoples-says-rate"/>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}


