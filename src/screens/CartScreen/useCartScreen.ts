import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeData, addNewData, decreaseData, increaseData } from '../../reducers/CartReducer/CardManager';

export const useCartScreen = () => {
    const Product4 = {
        id: 1,
        title: "Produto 1",
        value: 14.00,
        quantity: 5
    }
    const [cartData, setCartData] = useState([])
    const [cartLength, setCartLength] = useState(0);
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state?.cart);

    useEffect(()=> {
        setCartData(data);
        if(data?.length){
            setCartLength(data.length)
        }
    },[data])

    const addToCart = () => {
        console.log("ADD")
        dispatch(decreaseData(Product4));
    }

    const removeFromCart = (data: any) => {
        console.log(data)
        dispatch(removeData({id: data.id}));
        // let tempCartData
        // tempCartData = cartData.filter((product: any) => product.id !== data.id)
        // setCartData(tempCartData)
        // console.log(tempCartData);
    }

    return {
        cartData,
        cartLength,
        removeFromCart,
        addToCart
    }
}