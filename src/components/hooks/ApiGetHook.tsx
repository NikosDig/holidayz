import { useState, useEffect } from 'react';

/**
 * Interface representing media information for a venue.
 */
interface Media {
    url: string;
    alt: string;
}

/**
 * Interface representing meta information about a venue.
 */
interface Meta {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
}

/**
 * Interface representing the location details of a venue.
 */
interface Location {
    address: string;
    city: string;
    zip: string;
    country: string;
    continent: string;
    lat: number;
    lng: number;
}

/**
 * Interface representing a venue object.
 */
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

/**
 * Custom React hook for fetching venue data from an API.
 *
 * @param {string} venues - The API endpoint URL to fetch venue data.
 * @returns {{ items: Venue[], isError: boolean }} - Returns an object containing the list of venues and an error flag.
 */
function ApiGetHook(venues: string) {
    const [items, setItems] = useState<Venue[]>([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        /**
         * Fetches venue data from the provided API endpoint.
         * Handles errors and updates the state accordingly.
         */
        async function getData() {
            try {
                setIsError(false);
                
                const response = await fetch(venues);

                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }

                const result = await response.json();

                if (result && Array.isArray(result.data)) {
                    setItems(result.data);
                } else {
                    console.error('API response data is not an array:', result);
                    setItems([]); 
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
            }
        }

        getData();
    }, [venues]); 

    return { items, isError };
}

export default ApiGetHook;
