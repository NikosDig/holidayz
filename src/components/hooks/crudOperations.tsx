import { API_KEY } from './url';

// Create Venue
export const createVenue = async (authToken: string, venueData: any) => {
    try {
        const response = await fetch('https://v2.api.noroff.dev/holidaze/venues', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'X-Noroff-API-Key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(venueData)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to create venue: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Create venue error:', error);
        throw error;
    }
};

// Update Venue
export const updateVenue = async (authToken: string, venueId: string, venueData: any) => {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${venueId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'X-Noroff-API-Key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(venueData)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to update venue: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Update venue error:', error);
        throw error;
    }
};

// Delete Venue
export const deleteVenue = async (authToken: string, venueId: string) => {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${venueId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'X-Noroff-API-Key': API_KEY
            }
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to delete venue: ${errorBody}`);
        }

        return response.status === 204; // No content response indicates successful deletion
    } catch (error) {
        console.error('Delete venue error:', error);
        throw error;
    }
};

// Fetch Single Venue
export const fetchVenue = async (venueId: string) => {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${venueId}`);

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to fetch venue: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch venue error:', error);
        throw error;
    }
};