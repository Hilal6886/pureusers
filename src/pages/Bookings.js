import React, { useState, useEffect } from 'react';
import { getAllBookings } from '../services/bookingservice';
import './BookingList.scss';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllBookings();
      setBookings(result);
    }
    fetchData();
  }, []);

  return (
    <div className="booking-list-container">
      <h2>Booking List</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>User Email</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Guest Size</th>
            <th>Book At</th>
            <th>Tour ID</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
             
              <td>   {booking.id}</td>
              <td>{booking.userId}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.fullName}</td>
              <td>{booking.phone}</td>
              <td>{booking.guestSize}</td>
              <td>{booking.bookAt}</td>
              <td>{booking.tourId}</td>
              <td>{booking.total_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
