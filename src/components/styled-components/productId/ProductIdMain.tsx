
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledSpesificVenue from "./ProductIdMain.style";
import { API_KEY } from "../../hooks/url";
import { Venue, Booking } from "../../../ts/types";
import Bookings from './Bookings'; 
import Modal from './Modal';

function SpesificVenue() {
  const { id } = useParams<{ id: string }>();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const apiKey = API_KEY;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    const fetchVenue = async () => {
      if (!id) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);

        const venueResponse = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": apiKey,
          },
        });

        if (!venueResponse.ok) {
          throw new Error(`Failed to fetch venue. Status: ${venueResponse.status}`);
        }

        const venueResult = await venueResponse.json();
        if (venueResult.data) {
          setVenue(venueResult.data);
        } else {
          throw new Error("API response is missing 'data' property.");
        }

        if (isLoggedIn) {
          const bookingsResponse = await fetch(
            `https://v2.api.noroff.dev/holidaze/bookings?venueId=${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": API_KEY,
                "Content-Type": "application/json",
              },
            }
          );

          if (!bookingsResponse.ok) {
            console.error(`Failed to fetch bookings. Status: ${bookingsResponse.status}`);
          } else {
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
  }, [id, isLoggedIn]);

  const handleBookingSubmit = async (data: { dateFrom: string; dateTo: string; guests: number }) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const response = await fetch("https://v2.api.noroff.dev/holidaze/bookings", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          venueId: id,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create booking. Status: ${response.status}. ${errorText}`);
      }

      const result = await response.json();
      console.log("Booking created successfully:", result);

      
      setBookings((prevBookings) => [...prevBookings, result.data]);

      
      setSuccessMessage("Booking created successfully!");

      
      setIsModalOpen(false);

      
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Error creating booking:", error);
      setErrorMessage((error as Error).message);

      
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <p>Loading venue details...</p>;
  }

  if (isError) {
    return <div>Error fetching venue details.</div>;
  }

  if (!venue) {
    return <div>Venue not found.</div>;
  }

  if (isLoggedIn === null) {
    return <p>Checking login status...</p>;
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

      {isLoggedIn && (
        <div className="bookingSection">
          <button id="btn" onClick={handleOpenModal}>Book Now</button>
          <Bookings bookings={bookings} isLoggedIn={isLoggedIn} />
          {successMessage && <p className="successMessage">{successMessage}</p>}
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
      )}

      {/* Modal for booking */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleBookingSubmit}
        maxGuests={venue.maxGuests}
      />
    </StyledSpesificVenue>
  );
}

export default SpesificVenue;