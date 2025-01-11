// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import StyledSpesificVenue from "./ProductIdMain.style";
// import useAuth from "../../hooks/useAuth";

// interface Media {
//   url: string;
//   alt: string;
// }

// interface Meta {
//   wifi: boolean;
//   parking: boolean;
//   breakfast: boolean;
//   pets: boolean;
// }

// interface Location {
//   address: string;
//   city: string;
//   zip: string;
//   country: string;
//   continent: string;
//   lat: number;
//   lng: number;
// }

// interface Venue {
//   id: string;
//   name: string;
//   description: string;
//   media: Media[];
//   price: number;
//   maxGuests: number;
//   rating: number;
//   created: string;
//   updated: string;
//   meta: Meta;
//   location: Location;
// }

// interface Booking {
//   id: string;
//   userId: string;
//   venueId: string;
//   dateFrom: string;
//   dateTo: string;
//   guests: number;
//   created: string;
//   updated: string;
// }

// function SpesificVenue() {
//   const { id } = useParams<{ id: string }>();
//   const [venue, setVenue] = useState<Venue | null>(null);
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
//   const isLoggedIn = useAuth();

//   useEffect(() => {
//     const fetchVenue = async () => {
//       if (!id) {
//         setIsError(true);
//         setIsLoading(false);
//         return;
//       }

//       try {
//         setIsLoading(true);
//         setIsError(false);

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch venue. Status: ${response.status}`);
//         }

//         const result = await response.json();
//         if (result.data) {
//           setVenue(result.data);
//         } else {
//           throw new Error("API response is missing 'data' property.");
//         }

//         if (isLoggedIn) {
//           const token = localStorage.getItem('authToken');
//           if (token) {
//             const bookingsResponse = await fetch(
//               `https://v2.api.noroff.dev/holidaze/bookings?venueId=${id}`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               }
//             );
//             if (!bookingsResponse.ok) {
//               throw new Error(`Failed to fetch bookings. Status: ${bookingsResponse.status}`);
//             }

//             const bookingsResult = await bookingsResponse.json();
//             setBookings(bookingsResult.data || []);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching venue details:", error);
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchVenue();
//   }, [id, url, isLoggedIn]);

//   if (isLoading) {
//     return <p>Loading venue details...</p>;
//   }

//   if (isError) {
//     return <div>Error fetching venue details.</div>;
//   }

//   console.log(venue)

//   if (venue) {
//     return (
//       <StyledSpesificVenue>
//         <div className="imageContainer">
//           {venue.media && venue.media.length > 0 ? (
//             <img src={venue.media[0].url} alt={venue.media[0].alt} />
//           ) : (
//             <p>No images available</p>
//           )}
//         </div>
//         <h1>{venue.name}</h1>
//         <div className="detailsContainer">
//           <div className="orangeContainer">
//             <h5>Description</h5>
//             <p>{venue.description}</p>
//           </div>
//           <div className="orangeContainer">
//             <p>Price: ${venue.price}</p>
//             <p>Max Guests: {venue.maxGuests}</p>
//             <p>Rating: {venue.rating}</p>
//             <p>
//               Location: {venue.location.city}, {venue.location.country}
//             </p>
//           </div>
//         </div>
//         {isLoggedIn ? (
//           <div className="bookingSection">
//             <h2>Book this venue</h2>
//             <button>Reserve Now</button>
//             {bookings.length > 0 ? (
//               <div>
//                 <h3>Your Bookings:</h3>
//                 {bookings.map((booking) => (
//                   <div key={booking.id}>
//                     <p>
//                       Check-in: {booking.dateFrom} | Check-out: {booking.dateTo}
//                     </p>
//                     <p>Guests: {booking.guests}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No bookings for this venue yet.</p>
//             )}
//           </div>
//         ) : (
//           <div className="orangeContainer">
//             <p>Please log in to book this venue and see booking dates</p>
//           </div>
//         )}
//       </StyledSpesificVenue>
//     );
//   }

//   return <div>Venue not found.</div>;
// }

// export default SpesificVenue;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledSpesificVenue from "./ProductIdMain.style";
import useAuth from "../../hooks/useAuth";

interface Media {
  url: string;
  alt: string;
}

interface Meta {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
}

interface Location {
  address: string;
  city: string;
  zip: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
}

interface Venue {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: Meta;
  location: Location;
}

interface Booking {
  id: string;
  userId: string;
  venueId: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
}

function SpesificVenue() {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const isLoggedIn = useAuth();

  useEffect(() => {
    const fetchVenue = async () => {
      if (!id) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);

        // Fetch venue details
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch venue. Status: ${response.status}`);
        }

        const result = await response.json();
        if (result.data) {
          setVenue(result.data);
        } else {
          throw new Error("API response is missing 'data' property.");
        }

        // If the user is logged in, fetch bookings
        if (isLoggedIn) {
          const token = localStorage.getItem('authToken');
          if (token) {
            const bookingsResponse = await fetch(
              `https://v2.api.noroff.dev/holidaze/bookings?venueId=${id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (!bookingsResponse.ok) {
              throw new Error(`Failed to fetch bookings. Status: ${bookingsResponse.status}`);
            }

            const bookingsResult = await bookingsResponse.json();
            setBookings(bookingsResult.data || []);
          }
        }
      } catch (error) {
        console.error("Error fetching venue details:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id, url, isLoggedIn]);

  if (isLoading) {
    return <p>Loading venue details...</p>;
  }

  if (isError) {
    return <div>Error fetching venue details.</div>;
  }

  // If no venue is found or the venue data is missing
  if (!venue) {
    return <div>Venue not found.</div>;
  }

  return (
    <StyledSpesificVenue>
      <div className="imageContainer">
        {venue.media && venue.media.length > 0 ? (
          <img src={venue.media[0].url} alt={venue.media[0].alt} />
        ) : (
          <p>No images available</p>
        )}
      </div>
      <h1>{venue.name}</h1>
      <div className="detailsContainer">
        <div className="orangeContainer">
          <h5>Description</h5>
          <p>{venue.description}</p>
        </div>
        <div className="orangeContainer">
          <p>Price: ${venue.price}</p>
          <p>Max Guests: {venue.maxGuests}</p>
          <p>Rating: {venue.rating}</p>
          <p>
            Location: {venue.location.city}, {venue.location.country}
          </p>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="bookingSection">
          <h2>Book this venue</h2>
          <button>Reserve Now</button>
          {bookings.length > 0 ? (
            <div>
              <h3>Your Bookings:</h3>
              {bookings.map((booking) => (
                <div key={booking.id}>
                  <p>
                    Check-in: {booking.dateFrom} | Check-out: {booking.dateTo}
                  </p>
                  <p>Guests: {booking.guests}</p>
                </div>
              ))}
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
    </StyledSpesificVenue>
  );
}

export default SpesificVenue;
