import { createSlice } from '@reduxjs/toolkit';
import { RefreshUser, createUser, logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  redusers: {},
  extraReducers: builder => {
    builder
      .addCase(RefreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
 
        state.isLoggedIn = true;
      })
      .addCase(RefreshUser.rejected, state => {
   
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addCase(logIn.fulfilled, (state, action) => {
    
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
   
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(RefreshUser.fulfilled, (state, action) => {

        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
