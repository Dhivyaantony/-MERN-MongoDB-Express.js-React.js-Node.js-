import {createSlice}from "@reduxjs/toolkit";
import { useState } from "react";

const generalSlice = createSlice({
    name: 'user',
    initialState: {
      userDetails: {}
    },
    reducers: {
      setUserDetails: (state, action) => {
        state.userDetails = action.payload;
        console.log(state.userDetails); // Log the user details for debugging
      },
    },
  });
  
  export const { setUserDetails, setUserRole } = generalSlice.actions;
  export default generalSlice.reducer;
  