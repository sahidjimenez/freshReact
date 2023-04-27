import React from 'react';
import Header from '../Header/header';

const UsPage = () => {

  return (
    <>
      <Header />
      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="static/L1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="static/L2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="static/L4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="static/L3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        {/* Este codigo saca un WARNING DE VIOLAION   */}
        {/*  Added non-passive event listener to a scroll-blocking <some>
         event. Consider marking event handler as 'passive' to make the 
         page more responsive. See <URL>*/}

        <iframe
          title='google maps api'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.88455966831!2d-90.54016068447531!3d19.844836886651557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f833f1071891f3%3A0x810711aa7b1ed720!2sFresh&#39;n%20Green!5e0!3m2!1ses-419!2smx!4v1676308124495!5m2!1ses-419!2smx"
          width="100%"
          height="300"
          className="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
    </>



  )
}

export default UsPage;