import { formatNumber } from '../../utils/numberUtils';
import type { ProductType } from './Product.types';
import "./Product.css";

const Product = ({
    title,
    id,
    image,
    value
}: ProductType) => {
    return (
        <>
            <a className='product__box--content--box--element' key={id}>
            <div className='product__box--content--box--element--image'>
                <img src={image} className="product__box--content--box--element--image--img"/>
            </div>
            <h1 className='product__box--content--box--element--title'>
                {title}
            </h1>
            <h2 className='product__box--content--box--element--value'>
                {formatNumber(value, true )}
            </h2>
            </a>
        </>
    )
}

export default Product