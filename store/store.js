// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingslice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;
