
import React from 'react';
import { Booking } from "../../../ts/types";
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StyledBookings from './Booking.style';

interface BookingsProps {
  bookings: Booking[];
  isLoggedIn: boolean | null;
}

interface TileContentProps {
  date: Date;
  view: string;
}

const Bookings: React.FC<BookingsProps> = ({ bookings, isLoggedIn }) => {
  const tileClassName = ({ date, view }: TileContentProps) => {
    if (view === 'month') {
      const isBooked = bookings.some(
        (booking) =>
          new Date(booking.dateFrom).toDateString() === date.toDateString() ||
          new Date(booking.dateTo).toDateString() === date.toDateString()
      );

      return isBooked ? 'booked' : 'free';
    }
    return '';
  };

  return (
    <StyledBookings>
      {isLoggedIn ? (
        <div className="bookingSection">
          <h2>Bookings</h2>
          {bookings.length > 0 ? (
            <Calendar
              tileClassName={tileClassName}
              navigationLabel={({ date, label, locale }) => label}
              next2Label={null}
              prev2Label={null}
            />
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