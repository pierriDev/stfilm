import { useProductsScreen } from "./Products.functions"
import type { CategoryType, ProductType } from '../Home/Home.types';

import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Footer from '../../components/Footer/Footer';
import Product from "../../components/Product/Product"

import "./Products.css"

import placeholder from "../../assets/Circle.jpg";
import Filter from "../../components/Filter/Filter";

const Products = () => {

    const {
        isLoadingProduct,
        categoriesData,
        isLoadingCategories,
        products,
        onInputChange,
        handleSearchPress,
        handleCategoryPress,
        productSearch,
    } = useProductsScreen()

    return (
        <div className="body">
            <TopNavigation />
            <div className='productsSection section'>
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
        </div>
    )
}

export default Products