import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "./useCart";

import { website } from "../../constants/endpoints";


const Cart = () => {
    const {
        cartLength
    } = useCart()
    return (
        <>
            <div className="cartBackground">
                <div className="cartQuantity"><span>{cartLength}</span></div>
                <a className="cardButton" href={`${website}/carrinho`}>
                    <FaShoppingCart />
                </a>
            </div>
            <a className="loginButton">Entrar</a>
        </>
    )
}

export default Cart