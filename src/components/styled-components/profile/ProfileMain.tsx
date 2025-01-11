import StyledProfile from "./ProfileMain.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function ProfilePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Retrieve the stored user data from localStorage
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            setUser(JSON.parse(storedUserData));
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    // Safely check if bookings exist before accessing length
    const bookings = user.bookings || []; // Default to an empty array if bookings is undefined


    return (
        <StyledProfile>
           <div>
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
            <p>Venue Manager: {user.venueManager ? "Yes" : "No"}</p>

            {user.avatar && (
                <div>
                    <h2>Avatar:</h2>
                    <img
                        src={user.avatar.url}
                        alt={user.avatar.alt}
                        width={100}
                        height={100}
                    />
                </div>
            )}

            {user.banner && (
                <div>
                    <h2>Banner:</h2>
                    <img src={user.banner.url} alt={user.banner.alt} width={400} />
                </div>
            )}

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
