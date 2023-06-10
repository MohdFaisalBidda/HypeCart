import { createSlice } from "@reduxjs/toolkit";

// const initialState = {

// }

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        cartQuantity:0
    },
    reducers: {
        //removefromcart clearcart decreasecart gettotals
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id == action.payload._id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const itemIndex = state.cartItems.filter((item) => item._id != action.payload._id);
            state.cartItems = itemIndex;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItem = state.cartItems.filter((item) => item._id !== action.payload._id);
                state.cartItems = nextCartItem;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },

        clearCart(state) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //TODO: should be removed after finding the solution for storing particular user's products in their own cart
        reset(state){
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount= 0;
            state.cartQuantity=0;
    },

    getTotal(state,action){
       let {total,quantity} = state.cartItems.reduce((cartTotal,cartItems)=>{
            const {price,cartQuantity} =cartItems;
            const itemTotal =cartQuantity * price;
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;

            return cartTotal;
        },{
        total:0,
        quantity:0
    })

    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
    }

      
    }
})

export const { addToCart, removeFromCart, clearCart, decreaseCart,reset,getTotal } = cartSlice.actions;

export default cartSlice.reducer;