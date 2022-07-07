import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewData } from '../../reducers/CartReducer/CardManager';

export const useCart = () => {
    const [cartData, setCartData] = useState([])
    const [cartLength, setCartLength] = useState(0);
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state?.cart);


    useEffect(()=> {
        setCartData(data);
        if(data?.length){
            setCartLength(data.length)
        }
    },[])

    
    
    // const addToCard = ({data}: any) => {
    //     dispatch(addNewData({ cart: data }));
    // }


    return {
        cartLength
    }
}
