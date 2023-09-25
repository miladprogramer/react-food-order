import { createSlice } from "@reduxjs/toolkit";



    

    const cartUiSlice=createSlice({
  name: 'cartUi',
  initialState:{cartVisible:false},
  reducers: {
    toggle(state){
      state.cartVisible=!state.cartVisible
    }
  }
})

export const cartUiActions = cartUiSlice.actions
export default cartUiSlice