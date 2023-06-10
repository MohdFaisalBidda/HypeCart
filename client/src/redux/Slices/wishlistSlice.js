import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =createSlice({
    name:"wishlist",
    initialState:{
        wishlistItems:[],
        wishlistTotalQuantity:0,
        wishlistQuantity:0
    },
    reducers:{

        addToWishlist(state,action){
            const itemIndex = state.wishlistItems.filter((item)=>item._id == action.payload._id);
            // if(itemIndex >= 0){
            //     state.wishlistItems[itemIndex].wishlistQuantity += 1;
            // }else{
                let tempProduct ={...action.payload,wishlistQuantity:1};
                state.wishlistItems.push(tempProduct);
            // }
            localStorage.setItem("wishlistItem",JSON.stringify(state.wishlistItems));
        },

        removeWishlist(state,action){
            const itemIndex =state.wishlistItems.filter((item)=>item._id != action.payload._id);
            state.wishlistItems = itemIndex;
            localStorage.setItem("wishlistItem",JSON.stringify(state.wishlistItems));
        },
        
        clearWishlist(state,action){
            state.wishlistItems = [];
            localStorage.setItem("wishlistItem",JSON.stringify(state.wishlistItems));
        }

    }
})

export const {addToWishlist,removeWishlist,clearWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;