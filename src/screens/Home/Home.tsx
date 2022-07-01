import React from 'react';


import type { HighlightType, ProductType, CategoryType } from './Home.types';
import { useHomeScreen } from './Home.functions';
import { formatNumber } from '../../utils/numberUtils';
import './Home.css';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';
import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Product from '../../components/Product/Product';
import Filter from '../../components/Filter/Filter';

import bannerFirstImage from "../../assets/img_car.png";
import bannerSecondImage from "../../assets/img_car2.png";
import bannerThirdImage from "../../assets/img_car3.png";

import placeholder from "../../assets/Circle.jpg";
import secondPlaceholder from "../../assets/square.png";

const Home = () => {
  const {
    highLightData,
    isLoadingHighlights,
    products,
    isLoadingProduct,
    categoriesData,
    isLoadingCategories,
    handleCategoryPress,
    onInputChange,
    handleSearchPress,
    productSearch
  } = useHomeScreen();
  return (
    <>
    
      <TopNavigation isHome/>
      <div className='body'>
        {/* MAKE THIS A SLIDER LATER */}
        <div className='banner section'>
          <div className='bannerLine'>
            <div className='bannerSmall'> 
              <a className='bannerIcon'>
                <FaArrowLeft />
              </a>
            </div>
            <div className='bannerBig'>
              <img src={bannerFirstImage} className="bannerImage"/>
            </div>
            <div className='bannerSmall bannerRight'>
              <a className='bannerIcon'>
                <FaArrowRight />
              </a>
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
            <div className='product__box--filter--form'>
              <input type="text" className='product__box--filter--search' name='searchValue' value={productSearch} placeholder="Pesquisar Produtos" onChange={onInputChange}/>
            </div>
            <div className='product__box--filter--button'>

              <button className='product__box--filter--btn' onClick={() => {handleSearchPress()}}>Pesquisar</button>
            </div>
            <h1 className='product__box--filter--title'>Categorias de Produtos</h1>
            {
              !isLoadingCategories && (
                categoriesData?.map((category: CategoryType) => (
                  <Filter title={category.title} handleCategoryPress={handleCategoryPress}/>
                ))
              )
            }
          </div>
          <div className='product__box--content'>
            <h1 className='product__box--content--title'>Produtos</h1>
            {
              !isLoadingProduct ?
                <>
                  <h4 className='product__box--content--counter'>Exibindo 10 de {products?.length} resultados</h4>
                  <div className='product__box--content--box'>
                    {products?.map((product: ProductType) => (
                      <Product
                        id={product.id}
                        image={placeholder}
                        title={product.title}
                        value={product.value}
                      />
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
