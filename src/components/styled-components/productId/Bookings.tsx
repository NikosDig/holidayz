import React from 'react';
import { Booking } from "../../../ts/types";
import { format } from 'date-fns';
import StyledBookings from './Booking.style';

interface BookingsProps {
  bookings: Booking[];
  isLoggedIn: boolean | null;
}

const Bookings: React.FC<BookingsProps> = ({ bookings, isLoggedIn }) => {
  return (
    <StyledBookings>
      {isLoggedIn ? (
        <div className="bookingSection">
          <h2>Bookings</h2>
          {bookings.length > 0 ? (
            <div>
              {bookings.map((booking) => {
                const checkInDate = new Date(booking.dateFrom);
                const checkOutDate = new Date(booking.dateTo);

                return (
                  <div key={booking.id}>
                    <p>
                      Check-in: {format(checkInDate, 'd MMM yyyy')} | Check-out: {format(checkOutDate, 'd MMM yyyy')} Guests: {booking.guests}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No bookings for this venue yet.</p>
          )}
        </div>
      ) : (
        <div className="orangeContainer">
          <p>Please log in to book this venue and see booking dates</p>
        </div>
      )}
    </StyledBookings>
  );
};

export default Bookings;
