import React from 'react';
import './Home.css';
import TopNavigation from '../../components/TopNavigation/TopNavigation';
import bannerFirstImage from "../../assets/img_car.png";
import bannerSecondImage from "../../assets/img_car2.png";
import bannerThirdImage from "../../assets/img_car3.png";

function home() {
  return (
    <>
      <TopNavigation /> 
      <div className='body'>
        {/* MAKE THIS A SLIDER LATER */}
        <div className='banner section'>
          <div className='bannerLine'>
            <div className='bannerSmall'> 
              L 
            </div>
            <div className='bannerBig'>
              <h1 className='bannerTitle'>Nano Cerâmica</h1>
              <img src={bannerFirstImage} className="bannerImage"/>
              <h2 className='bannerSubtitle'>Linha Perfection</h2>
            </div>
            <div className='bannerSmall bannerRight'>
              R 
            </div>
          </div>
          <div className='bannerLine bannerFooter'>
            <div className='bannerSmall bannerDotsBox'> 
              . . .
            </div>
            <div className='bannerBig bannerInfo'>
              <span className='bannerInfo__text'>(41) 3333-0193</span>
              <span className='bannerInfo__text'>stfilm@stfilm.com.br</span>
              <span className='bannerInfo__text'>Atendimento Online</span>
            </div>
          </div>
        </div>
        <div className='highlights section'>
          <h1 className='highlights__title'>DESTAQUES</h1>
        </div>
      </div>
    </>
  );
}

export default home;
