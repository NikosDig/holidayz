import React, { useEffect, useState } from 'react';
import StyledProfile from './ProfileMain.style';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../hooks/url';
import { format } from 'date-fns';

interface Venue {
  name: string;
  maxGuests: number;
}

interface Booking {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  venue: Venue | null;
}

function ProfileMain() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [editBooking, setEditBooking] = useState<any | null>(null);
  const [editDateFrom, setEditDateFrom] = useState('');
  const [editDateTo, setEditDateTo] = useState('');
  const [editGuests, setEditGuests] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  
  // Declare bookings state at the top level, before any conditionals
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        const token = localStorage.getItem("authToken");

        try {
          const response = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${userData.name}?_bookings=true`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-Noroff-API-Key": API_KEY,
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch profile. Status: ${response.status}`);
          }

          const result = await response.json();
          setUser(result.data);
          setBookings(result.data.bookings || []); 
        } catch (error) {
          console.error("Error fetching profile:", error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error("User data not found in localStorage.");
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateBooking = async (bookingId: string) => {
    const token = localStorage.getItem('authToken');
    
    try {
      const updatedBooking = {
        dateFrom: new Date(editDateFrom).toISOString(),
        dateTo: new Date(editDateTo).toISOString(),
        guests: editGuests,
      };
      
      const response = await fetch(`https://v2.api.noroff.dev/holidaze/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBooking),
      });
  
      if (response.ok) {
        const updatedData = await response.json();
        console.log('Updated booking:', updatedData);
        
        const updatedBookings = bookings.map((booking: Booking) =>
          booking.id === bookingId ? { ...updatedData.data, venue: booking.venue } : booking
        );
        
        setBookings(updatedBookings);  // Update the bookings state
        setEditBooking(null);          // Reset edit mode
        setErrorMessage(null);         // Clear any previous error messages
      } else {
        const error = await response.json();
        console.error('Failed to update booking:', error);
  
        // Process the errors array to concatenate all error messages
        const errorMessages = error.errors.map((err: any) => err.message).join(', ');
  
        // Set the error messages for the user to see
        setErrorMessage(errorMessages || "An error occurred while updating the booking.");
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      setErrorMessage("An unexpected error occurred while updating the booking.");
    }
  };
  
  
  

  const handleDeleteBooking = async (bookingId: string) => {
    const token = localStorage.getItem('authToken');
    
    try {
      const response = await fetch(`https://v2.api.noroff.dev/holidaze/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
        setErrorMessage(null); // Clear any previous error messages
      } else {
        const error = await response.json();
        console.error('Failed to delete booking:', error);
        setErrorMessage(error.message || "An error occurred while deleting the booking.");
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      setErrorMessage("An unexpected error occurred while deleting the booking.");
    }
  };
  
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching profile data.</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <StyledProfile>
      <div className="infoContainer">
        <h1>{user.name}'s Profile</h1>
        <p>Email: {user.email}</p>
        <p>Venue Manager: {user.venueManager ? 'Yes' : 'No'}</p>

        <div className="editProfileContainer">
          <p>Edit profile:</p>
          <Link to="/editProfile" style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M19.14 12.936c.04-.321.06-.651.06-.936 0-.285-.02-.615-.06-.936l2.07-1.64a1.003 1.003 0 0 0 .24-1.118l-2-3.464a1.003 1.003 0 0 0-1.135-.386l-2.49 1.048a6.94 6.94 0 0 0-1.305-.818l-.375-2.708a1.003 1.003 0 0 0-.993-.888h-3.232a1.003 1.003 0 0 0-.993.888l-.375 2.708a6.94 6.94 0 0 0-1.305.818l-2.49-1.048a1.003 1.003 0 0 0-1.135.386l-2 3.464a1.003 1.003 0 0 0 .24 1.118l2.07 1.64c-.04.321-.06.651-.06.936 0 .285.02.615.06.936l-2.07 1.64a1.003 1.003 0 0 0-.24 1.118l2 3.464a1.003 1.003 0 0 0 1.135.386l2.49-1.048c.375.239.776.456 1.205.668l.375 2.708a1.003 1.003 0 0 0 .993.888h3.232a1.003 1.003 0 0 0 .993-.888l.375-2.708a6.94 6.94 0 0 0 1.205-.668l2.49 1.048a1.003 1.003 0 0 0 1.135-.386l2-3.464a1.003 1.003 0 0 0-.24-1.118l-2.07-1.64zM12 15.5c-1.539 0-2.8-1.261-2.8-2.8s1.261-2.8 2.8-2.8 2.8 1.261 2.8 2.8-1.261 2.8-2.8 2.8z" />
            </svg>
          </Link>
        </div>

        <div className="banner-container">
          {user.banner && (
            <img className="banner" src={user.banner.url} alt={user.banner.alt} />
          )}
          {user.avatar && (
            <img className="avatar" src={user.avatar.url} alt={user.avatar.alt} />
          )}
        </div>

              {/* Error Message */}
      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
          <strong>{errorMessage}</strong>
        </div>
      )}

<div className="bookings">
  <h2>Bookings:</h2>
  {bookings.length > 0 ? (
    bookings.map((booking: Booking) => (
      <div key={booking.id} className="booking-item">
        <p>From: {format(new Date(booking.dateFrom), 'dd MMM yyyy')} To: {format(new Date(booking.dateTo), 'dd MMM yyyy')}</p>
        <p>Guests: {booking.guests}</p>
        <p>Venue: {booking.venue ? booking.venue.name : "Venue data unavailable"}</p>

        {/* Display maxGuests for the venue */}
        {booking.venue && (
          <p>Max Guests: {booking.venue.maxGuests > 0 ? booking.venue.maxGuests : "Not specified"}</p>
        )}

        <div className="button-container">
          <button className="button" onClick={() => setEditBooking(booking)}>
            Edit
          </button>
          <button className="button delete" onClick={() => handleDeleteBooking(booking.id)}>
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No bookings found.</p>
  )}
</div>

      </div>

      {editBooking && (
  <div className="editBookingForm">
    <h3>Edit Booking</h3>
    <label>Date From:</label>
    <input
      type="date"
      value={editDateFrom}
      onChange={(e) => setEditDateFrom(e.target.value)}
    />
    <label>Date To:</label>
    <input
      type="date"
      value={editDateTo}
      onChange={(e) => setEditDateTo(e.target.value)}
    />
    <label>Guests:</label>
    <input
      type="number"
      value={editGuests}
      min="1"
      max={editBooking?.venue?.maxGuests || 10}  // Ensure maxGuests from venue
      onChange={(e) => {
        const newGuests = Number(e.target.value);
        
        if (newGuests < 1) {
          setEditGuests(1); // Enforce minimum of 1 guest
        } else if (editBooking?.venue && newGuests > editBooking.venue.maxGuests) {
          setEditGuests(editBooking.venue.maxGuests); // Enforce maximum guests from venue
        } else {
          setEditGuests(newGuests);
        }
      }}
    />

    {editGuests < 1 && (
      <p style={{ color: 'red' }}>Guests must be at least 1.</p>
    )}

    {editBooking?.venue && editGuests > editBooking.venue.maxGuests && (
      <p style={{ color: 'red' }}>
        Guests cannot exceed {editBooking.venue.maxGuests} for this venue.
      </p>
    )}

    <div className="button-container">
      <button 
        className="button" 
        onClick={() => handleUpdateBooking(editBooking.id)}
        disabled={editGuests < 1 || (editBooking?.venue && editGuests > editBooking.venue.maxGuests)} // Disable if guest count is invalid
      >
        Save Changes
      </button>
      <button className="button delete" onClick={() => setEditBooking(null)}>
        Cancel
      </button>
    </div>
  </div>
)}

    </StyledProfile>
  );
}

export default ProfileMain;
