import { createSlice } from '@reduxjs/toolkit';
import { ActionType } from './CardManager.types';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
      {
        id: 1,
        title: "Produto 1",
        value: 110.00,
        quantity: 3
      },
      {
        id: 2,
        title: "Produto 2",
        value: 2.00,
        quantity: 10
      },
      {
        id: 3,
        title: "Produto 3",
        value: 14.00,
        quantity: 5
      },
    ],
    reducers: {
      addNewData: (state: any, action: any) => {
        
        if(state.some((data: any) => data.id === action.payload.id)){
          return state.map((item: any) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity + item.quantity} : item  )
        }
        
        return [
          ...state,
          action.payload
        ]
      },
      removeData: (state: any, action: any) => {
        const { id } = action.payload;
        return state.filter((product: any) => product.id !== id)
      },
      increaseData: (state: any, action: any) => {
        if(state.some((data: any) => data.id === action.payload.id)){
          return state.map((item: any) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item  )
        }
      },
      decreaseData: (state: any, action: any) => {
        if(state.some((data: any) => data.id === action.payload.id)){

          
          return state.map((item: any) => item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item  )
        }
      },
      editData: (state: any, action: any) => {

      }
    },
});

export const { addNewData, removeData, increaseData, decreaseData } = cartSlice.actions;

export default cartSlice.reducer;
