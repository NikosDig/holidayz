import React, { useState, useEffect } from 'react';
import StyledManagerCrudVenue from './ManagerCrudVenue.style';
import { createVenue, updateVenue, deleteVenue } from '../../hooks/crudOperations';
import { API_KEY } from '../../hooks/url';
import { Link } from 'react-router-dom';
import {format} from "date-fns";

const ManagerCrudVenue: React.FC = () => {
    const [venues, setVenues] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [newVenue, setNewVenue] = useState({
        name: '',
        description: '',
        media: [{ url: '', alt: '' }],
        price: 0,
        maxGuests: 0,
        meta: {
            wifi: false,
            parking: false,
            breakfast: false,
            pets: false,
        },
        location: {
            address: '',
            city: '',
            zip: '',
            country: '',
            continent: '',
        },
    });
    const [editVenue, setEditVenue] = useState<any>(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const userData = localStorage.getItem('userData');
    const parsedUserData = userData ? JSON.parse(userData) : null;
    const isVenueManager = parsedUserData?.venueManager ?? false;
    const userName = parsedUserData?.name;
    const authToken = parsedUserData?.accessToken;

    useEffect(() => {
        if (!isVenueManager) return;

        const fetchVenues = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://v2.api.noroff.dev/holidaze/venues?_owner=true&_bookings=true`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            'X-Noroff-API-Key': API_KEY,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch venues');
                }

                const jsonResponse = await response.json();
                const userVenues = jsonResponse.data?.filter(
                    (venue: any) => venue.owner?.name === userName
                );
                setVenues(userVenues || []);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchVenues();
    }, [authToken, userName, isVenueManager]);

    const handleCreateVenue = async () => {
        if (!authToken) return;

        try {
            const response = await createVenue(authToken, newVenue);
            const createdVenue = response.data;

            setVenues((prevVenues) => [...prevVenues, createdVenue]);
            setNewVenue({
                name: '',
                description: '',
                media: [{ url: '', alt: '' }],
                price: 0,
                maxGuests: 0,
                meta: { wifi: false, parking: false, breakfast: false, pets: false },
                location: { address: '', city: '', zip: '', country: '', continent: '' },
            });
        } catch (error) {
            console.error('Error creating venue:', error);
        }
    };

    const handleUpdateVenue = async () => {
        if (!authToken || !editVenue) return;
    
        try {
            
            const updatedVenue = await updateVenue(authToken, editVenue.id, editVenue);
    
            
            setVenues((prevVenues) =>
                prevVenues.map((venue) =>
                    venue.id === updatedVenue.id ? { ...updatedVenue } : venue
                )
            );
    
            
            setShowEditModal(false);
            setEditVenue(null);
        } catch (error) {
            console.error('Error updating venue:', error);
        }
    };
    

    const handleDeleteVenue = async (id: string) => {
        if (!authToken) return;
        try {
            const success = await deleteVenue(authToken, id);
            if (success) setVenues(venues.filter((venue) => venue.id !== id));
            console.log('Deleted Venue:', id);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        const updateState = (prev: any) => {
            if (type === 'checkbox') {
                const isChecked = (e.target as HTMLInputElement).checked;
                return { ...prev, meta: { ...prev.meta, [name]: isChecked } };
            } else if (name === 'price' || name === 'maxGuests') {
                return { ...prev, [name]: value === '' ? '' : Number(value) };
            } else if (name in prev.location) {
                return { ...prev, location: { ...prev.location, [name]: value } };
            } else if (name === 'media') {
                return { ...prev, media: [{ ...prev.media[0], url: value }] };
            } else {
                return { ...prev, [name]: value };
            }
        };

        if (showEditModal) {
            setEditVenue((prev: any) => updateState(prev));
        } else {
            setNewVenue((prev: any) => updateState(prev));
        }
    };

    if (!isVenueManager) {
        return <p></p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <StyledManagerCrudVenue $isVisible={true}>
            <h2>Your Venues</h2>
            <ul>
                {venues.length > 0 ? (
                    venues.map((venue: any, index: number) => (
                        <li key={venue.id || index}>
                            <h3>{venue.name}</h3>
                            <p>{venue.description}</p>
                            <p>Price: ${venue.price}</p>
                            <p>Max Guests: {venue.maxGuests}</p>

                            {/* Display reservations for each venue */}
                            <div>
                                <h4>Reservations:</h4>
                                {venue.bookings && venue.bookings.length > 0 ? (
                                    <ul>
                                        {venue.bookings.map((booking: any, bookingIndex: number) => (
                                            <li key={bookingIndex}>
                                                <p>Guest Name: {booking.customer.name}</p>
                                                <p>Check-in: {format(new Date(booking.dateFrom), 'PPP')}</p>
                                                <p>Check-out: {format(new Date(booking.dateTo), 'PPP')}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No reservations yet.</p>
                                )}
                            </div>


                            <button
                                onClick={() => {
                                    setEditVenue(venue);
                                    setShowEditModal(true);
                                }}
                            >
                                Edit
                            </button>
                            <button onClick={() => handleDeleteVenue(venue.id)}>Delete</button>
                            <Link to={`/product/${venue.id}`}>
                                <button>View Venue</button>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No venues created yet.</p>
                )}
            </ul>

            {showEditModal && (
                <div className="modal">
                    <h3>Edit Venue</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={editVenue.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={editVenue.description}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="media"
                        placeholder="Image URL"
                        value={editVenue.media[0]?.url || ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={editVenue.price}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="maxGuests"
                        placeholder="Max Guests"
                        value={editVenue.maxGuests}
                        onChange={handleChange}
                    />
                    <button onClick={handleUpdateVenue}>Save Changes</button>
                    <button onClick={() => setShowEditModal(false)}>Cancel</button>
                </div>
            )}

            <div>
                <h3>Create a New Venue</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newVenue.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newVenue.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="media"
                    placeholder="Image URL"
                    value={newVenue.media[0]?.url || ''}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newVenue.price}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="maxGuests"
                    placeholder="Max Guests"
                    value={newVenue.maxGuests}
                    onChange={handleChange}
                />
                <button onClick={handleCreateVenue}>Create Venue</button>
            </div>
        </StyledManagerCrudVenue>
    );
};

export default ManagerCrudVenue;
