import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {

      state.isLoading = true;
    })
    .addCase(addContact.pending, (state) => {

      state.isLoading = true;
    })
    .addCase(deleteContact.pending, (state) => {

      state.isLoading = true;
    })
    .addCase(fetchContacts.rejected, (state,action) => {

     state.isLoading = false;
     state.error = action.payload;
    })
    .addCase(deleteContact.rejected, (state,action) => {
      
      state.isLoading = false;
      state.error = action.payload;

    })
    .addCase(addContact.rejected, (state, action) =>  {
      
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(fetchContacts.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state,action) =>  {
      state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state,action) =>  {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index,1);
    })
  
  },
  });


export const contactsReducer = contactsSlice.reducer;
