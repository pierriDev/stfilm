import { useCartScreen } from "./useCartScreen"
import "./CartScreen.css"

import { FaTimes } from "react-icons/fa";

import { formatNumber } from '../../utils/numberUtils';

import Footer from "../../components/Footer/Footer";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

const CartScreen = () => {
    const {
        cartData,
        cartLength,
        removeFromCart,
        addToCart
    } = useCartScreen()

    return (
        <div className="body">
            <TopNavigation />
            <div className="section cartSection">
                <table className="cartTable">
                    <tr className="cartHeader">
                        <th className="tableHeader"></th>
                        <th className="tableHeader">Imagem</th>
                        <th className="tableHeader">Produto</th>
                        <th className="tableHeader">Preço</th>
                        <th className="tableHeader">Quantidade</th>
                        <th className="tableHeader">Total</th>
                    </tr>
                    {cartData?.map((cartProduct: any, index: any) => {
                        if(index%2 === 0){
                            return(
                                <tr className="cartBody">
                                    <td className="tableColumn">
                                        <a className="cartBody__btn" onClick={() => {removeFromCart(cartProduct)}}>
                                            <FaTimes />
                                        </a>
                                    </td>
                                    <td className="tableColumn">
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{cartProduct.title}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{formatNumber(cartProduct.value,true)}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{cartProduct.quantity}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{formatNumber(cartProduct.value * cartProduct.quantity, true)}</p>
                                    </td>
                                </tr>
                            )
                        }else{
                            return(
                                <tr className="cartBody cartBodyGray">
                                    <td className="tableColumn">
                                        <a className="cartBody__btn" onClick={() => {addToCart()}}>
                                            <FaTimes />
                                        </a>
                                    </td>
                                    <td className="tableColumn">
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{cartProduct.title}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{formatNumber(cartProduct.value,true)}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{cartProduct.quantity}</p>
                                    </td>
                                    <td className="tableColumn">
                                        <p className="tableText">{formatNumber(cartProduct.value * cartProduct.quantity, true)}</p>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default CartScreen;