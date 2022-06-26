import React from 'react';


import type { HighlightType, ProductType } from './Home.types';
import { useHomeScreen } from './Home.functions';
import { formatNumber } from '../../utils/numberUtils';
import './Home.css';

import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Footer from '../../components/Footer/Footer';

import bannerFirstImage from "../../assets/img_car.png";
import bannerSecondImage from "../../assets/img_car2.png";
import bannerThirdImage from "../../assets/img_car3.png";

import placeholder from "../../assets/Circle.jpg";
import secondPlaceholder from "../../assets/square.png";

const Home = () => {
  const {
    highLightData,
    isLoadingHighlights,
    productData,
    isLoadingProduct,
  } = useHomeScreen();
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
              <img src={bannerFirstImage} className="bannerImage"/>
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
          {
            isLoadingHighlights ?
              <></>
              //CREATE LOADING INDICATOR
            :
              <div className='highlights__box'>
                {highLightData?.map((product: HighlightType) => (
                    <a className='highlights__box--card' key={product.id}>
                      <div className='highlights__box--card--imagem'>
                        <div className='highlights__box--card--imagem--box'>
                          {/* CHANGE PLACEHOLDER TO ACTUAL IMAGE FROM API */}
                          <img src={placeholder} className="highlights__box--card--imagem--box--img"/>
                        </div>
                      </div>
                      <div className='highlights__box--card--info'>
                        <h2 className='highlights__box--card--info--category'>{product.product.category.title}</h2>
                        <h1 className='highlights__box--card--info--title'>{product.product.title}</h1>
                        <h2 className='highlights__box--card--info--value'>{formatNumber(product.value, true )}</h2>
                      </div>
                    </a>
                ) )}
              </div>
          }
        </div>
      </div>
      <div className='products section'>
        <div className='products__box'>
          <div className='product__box--filter'>
            FILTRO
          </div>
          <div className='product__box--content'>
            <h1 className='product__box--content--title'>Todos os Produtos</h1>
            {
              !isLoadingProduct ?
                <>
                  <h4 className='product__box--content--counter'>Exibindo 10 de {productData?.length} resultados</h4>
                  <div className='product__box--content--box'>
                    {productData?.map((product: ProductType) => (
                      <a className='product__box--content--box--element' key={product.id}>
                        <div className='product__box--content--box--element--image'>
                          <img src={secondPlaceholder} className="product__box--content--box--element--image--img"/>
                        </div>
                        <h1 className='product__box--content--box--element--title'>
                          {product.title}
                        </h1>
                        <h2 className='product__box--content--box--element--value'>
                          {formatNumber(product.value, true )}
                        </h2>
                      </a>
                    ) )}
                  </div>
                </>
              : 
                <></>
            }
          </div>
        </div>
      </div>
      <Footer /> 

    </>
    
  );
}

export default Home;
