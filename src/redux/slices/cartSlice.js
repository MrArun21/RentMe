import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addltem: (state, action) => {
      const newltem = action.payload;
      const existingltem = state.cartItems.find(
        (item) => item.id === newltem.id
      );
      state.totalQuantity++;
      if (!existingltem) {
        state.cartItems.push({
          id: newltem.id,
          productName: newltem.productName,
          imgUrl: newltem.imgUrl,
          price: newltem.price,
          quantity: 1,
          totalPrice: newltem.price,
        });
      } else {
        existingltem.quantity++;
        existingltem.totalPrice =
          Number(existingltem.totatPrice) + Number(newltem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },

    deletedItem:(state,action) =>{
      const id =action.payload
      const existingltem =state.cartItems.find(item => item.id === id)
    
      if(existingltem){
        state.cartItems =state.cartItems.filter(item => item.id !== id )
        state.totalQuantity = state.totalQuantity -existingltem.quantity
    
      }
    
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    
    }
  },



});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
