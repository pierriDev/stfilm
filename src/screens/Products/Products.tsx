import { useProductsScreen } from "./Products.functions"
import type { ProductType } from '../Home/Home.types';

import TopNavigation from '../../components/TopNavigation/TopNavigation';
import Footer from '../../components/Footer/Footer';
import Product from "../../components/Product/Product"

import "./Products.css"

import placeholder from "../../assets/Circle.jpg";

const Products = () => {

    const {
        productData,
        isLoadingProduct,
    } = useProductsScreen()

    return (
        <div className="body">
            <TopNavigation />
            <div className='productsSection section'>
                <div className='products__box'>
                <div className='product__box--filter'>
                    FILTRO
                </div>
                <div className='product__box--content'>
                    <h1 className='product__box--content--title'>Produtos</h1>
                    {
                    !isLoadingProduct ?
                        <>
                        <h4 className='product__box--content--counter'>Exibindo 10 de {productData?.length} resultados</h4>
                        <div className='product__box--content--box'>
                            {productData?.map((product: ProductType) => (
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