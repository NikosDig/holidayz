import React from 'react';
import { Booking } from "../../../ts/types";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StyledBookings from './Booking.style';

/**
 * Props for the Bookings component.
 * @interface BookingsProps
 * @property {Booking[]} bookings - Array of bookings for the venue, containing booking information like start and end dates.
 * @property {boolean | null} isLoggedIn - A flag indicating if the user is logged in. It can be true, false, or null (if the login status is unknown).
 */
interface BookingsProps {
  bookings: Booking[];
  isLoggedIn: boolean | null;
}

/**
 * Props for the tile content in the calendar.
 * @interface TileContentProps
 * @property {Date} date - The current date for the tile being rendered in the calendar.
 * @property {string} view - The current view mode of the calendar (e.g., 'month').
 */
interface TileContentProps {
  date: Date;
  view: string;
}

/**
 * Bookings component.
 * Displays a calendar showing the availability of a venue based on the provided bookings.
 * The calendar highlights booked dates. If the user is not logged in, a prompt to log in is displayed.
 * 
 * @component
 * @param {BookingsProps} props - The props for this component, including the list of bookings and the login status.
 * @returns {JSX.Element} The rendered component displaying the calendar or a login prompt.
 */
const Bookings: React.FC<BookingsProps> = ({ bookings, isLoggedIn }) => {
  /**
   * Determines the tile class name for each date in the calendar based on booking availability.
   * If the date has a booking, it will have the class 'booked'; otherwise, it will be marked as 'free'.
   * 
   * @param {TileContentProps} param0 - The parameters for the tile, containing the date and the calendar view.
   * @returns {string} The CSS class name for the tile: either 'booked' or 'free', depending on whether the date is booked.
   */
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
