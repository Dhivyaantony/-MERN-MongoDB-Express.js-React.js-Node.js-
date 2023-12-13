import {createSlice}from "@reduxjs/toolkit";


const generalSlice = createSlice({
    name: 'user',
    initialState: {
      userDetails: {},
    },
    reducers: {
      setUserDetails: (state, action) => {
        state.userDetails = action.payload;
        console.log(state.userDetails); // Log the user details for debugging
      },
    },
  });
  export const { setUserDetails} = generalSlice.actions;
  export default generalSlice.reducer;
  