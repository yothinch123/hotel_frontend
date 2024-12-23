// pages/booking.js
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInDate, setCheckOutDate, setSelectedRoom, setGuestCount } from '../store/bookingslice.js';

export default function BookingPage() {
  const dispatch = useDispatch();
  const { checkInDate, checkOutDate, selectedRoom, guestCount } = useSelector((state) => state.booking);

  const handleCheckInDateChange = (e) => {
    dispatch(setCheckInDate(e.target.value));
  };

  const handleCheckOutDateChange = (e) => {
    dispatch(setCheckOutDate(e.target.value));
  };

  const handleRoomSelect = (room) => {
    dispatch(setSelectedRoom(room));
  };

  const handleGuestCountChange = (e) => {
    dispatch(setGuestCount(e.target.value));
  };

  return (
    <div>
      <h1>Hotel Booking</h1>
      <label>
        Check-in Date:
        <input type="date" value={checkInDate || ''} onChange={handleCheckInDateChange} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkOutDate || ''} onChange={handleCheckOutDateChange} />
      </label>
      <label>
        Number of Guests:
        <input type="number" value={guestCount} onChange={handleGuestCountChange} />
      </label>

      <div>
        <h2>Available Rooms</h2>
        <button onClick={() => handleRoomSelect('Single Room')}>Single Room</button>
        <button onClick={() => handleRoomSelect('Double Room')}>Double Room</button>
        <button onClick={() => handleRoomSelect('Suite')}>Suite</button>
      </div>

      <div>
        <h2>Selected Room: {selectedRoom}</h2>
      </div>

      <button>Confirm Booking</button>
    </div>
  );
}
