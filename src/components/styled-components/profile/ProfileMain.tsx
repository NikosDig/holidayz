import StyledProfile from "./ProfileMain.style";
import { useEffect, useState } from 'react';

function ProfilePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUser(JSON.parse(storedUserData));
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
                <p>Venue Manager: {user.venueManager ? "Yes" : "No"}</p>

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

export default ProfilePage;
