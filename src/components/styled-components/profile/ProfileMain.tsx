
import React, { useEffect, useState } from 'react';
import StyledProfile from './ProfileMain.style';
import { Link } from 'react-router-dom';

function ProfileMain() {
  const [user, setUser] = useState<any>(null);

  
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    } else {
      console.error("User data not found in localStorage.");
    }
  }, []); 

  
  if (!user) {
    return <div>Loading...</div>;
  }

  const bookings = user.bookings || [];

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
        <div>
          <h2>Bookings:</h2>
          {bookings.length > 0 ? (
            <ul>
              {bookings.map((booking: any) => (
                <li key={booking.id}>
                  <p>Booking ID: {booking.id}</p>
                  <p>From: {booking.dateFrom} To: {booking.dateTo}</p>
                  <p>Guests: {booking.guests}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    </StyledProfile>
  );
}

export default ProfileMain;
