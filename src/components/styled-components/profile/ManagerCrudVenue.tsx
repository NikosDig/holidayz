import React, { useState, useEffect } from 'react';
import StyledManagerCrudVenue from './ManagerCrudVenue.style';
import { createVenue, updateVenue, deleteVenue } from '../../hooks/crudOperations';
import { API_KEY } from '../../hooks/url';

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

    const userData = localStorage.getItem('userData');
    const parsedUserData = userData ? JSON.parse(userData) : null;
    const isVenueManager = parsedUserData?.venueManager ?? false;
    const userName = parsedUserData?.name;
    const authToken = parsedUserData?.accessToken;
    const [creatingVenue, setCreatingVenue] = useState<boolean>(false);

    useEffect(() => {
        if (!isVenueManager) return;

        const fetchVenues = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://v2.api.noroff.dev/holidaze/venues?_owner=true`,
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
    
            setVenues((prevVenues) => {
                const updatedVenues = [...prevVenues, createdVenue];
                
                return updatedVenues;
            });
        } catch (error) {
            console.error('Error creating venue:', error);
        }
    };
    
    

    const handleUpdateVenue = async (id: string) => {
        if (!authToken) return;
        const venueData = { name: 'Updated Venue Name' }; // Example update
        try {
            const updatedVenue = await updateVenue(authToken, id, venueData);
            setVenues(venues.map((venue) => (venue.id === id ? updatedVenue : venue)));
            console.log('Updated Venue:', updatedVenue);
        } catch (error) {
            console.error(error);
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
    
        if (type === 'checkbox') {
            const isChecked = (e.target as HTMLInputElement).checked;
            setNewVenue((prev) => ({
                ...prev,
                meta: { ...prev.meta, [name]: isChecked },
            }));
        } else if (name === 'price' || name === 'maxGuests' || name === 'lat' || name === 'lng') {
            setNewVenue((prev) => ({ ...prev, [name]: Number(value) }));
        } else if (name in newVenue.location) {
            setNewVenue((prev) => ({
                ...prev,
                location: { ...prev.location, [name]: value },
            }));
        } else if (name === 'media') {
            setNewVenue((prev) => ({
                ...prev,
                media: [{ ...prev.media[0], url: value }],
            }));
        } else {
            setNewVenue((prev) => ({ ...prev, [name]: value }));
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
                            <button onClick={() => handleUpdateVenue(venue.id)}>Edit</button>
                            <button onClick={() => handleDeleteVenue(venue.id)}>Delete</button>
                        </li>
        ))
    ) : (
        <p>No venues created yet.</p>
    )}
</ul>

    
            <div>
                <h3>Create a New Venue</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="media"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="maxGuests"
                    placeholder="Max Guests"
                    onChange={handleChange}
                />
                <fieldset>
                    <legend>Location</legend>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="metaOptions">
                    <legend>Meta Options</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="wifi"
                            onChange={handleChange}
                        />
                        WiFi
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="parking"
                            onChange={handleChange}
                        />
                        Parking
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="breakfast"
                            onChange={handleChange}
                        />
                        Breakfast
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="pets"
                            onChange={handleChange}
                        />
                        Pets
                    </label>
                </fieldset>
                <button onClick={handleCreateVenue}>Create Venue</button>
            </div>
        </StyledManagerCrudVenue>
    );
    
    
        
};

export default ManagerCrudVenue;
