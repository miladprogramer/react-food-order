import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import cartUiSlice from "./cartUiSlice";

const store=configureStore({
reducer:{
    cart:CartSlice.reducer,
    cartUi:cartUiSlice.reducer
}
})

export default store;