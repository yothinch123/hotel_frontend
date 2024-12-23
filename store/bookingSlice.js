// store/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkInDate: null,
  checkOutDate: null,
  selectedRoom: null,
  guestCount: 1,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    setGuestCount: (state, action) => {
      state.guestCount = action.payload;
    },
  },
});

export const { setCheckInDate, setCheckOutDate, setSelectedRoom, setGuestCount } = bookingSlice.actions;

export default bookingSlice.reducer;
