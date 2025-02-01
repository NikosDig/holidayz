import { API_KEY } from './url';

/**
 * Creates a new venue.
 * 
 * @param {string} authToken - The authentication token for authorization.
 * @param {object} venueData - The data of the venue to be created.
 * @returns {Promise<object>} - The created venue data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const createVenue = async (authToken: string, venueData: any) => {
    try {
        const response = await fetch('https://v2.api.noroff.dev/holidaze/venues', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'X-Noroff-API-Key': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(venueData),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Failed to create venue: ${errorBody}`);
        }

        const responseBody = await response.json();
        return responseBody;  
    } catch (error) {
        console.error('Create venue error:', error);
        throw error;
    }
};

/**
 * Updates an existing venue.
 * 
 * @param {string} authToken - The authentication token for authorization.
 * @param {string} venueId - The ID of the venue to update.
 * @param {object} venueData - The updated data for the venue.
 * @returns {Promise<object>} - The updated venue data.
 * @throws {Error} - Throws an error if the request fails.
 */
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

/**
 * Deletes an existing venue.
 * 
 * @param {string} authToken - The authentication token for authorization.
 * @param {string} venueId - The ID of the venue to delete.
 * @returns {Promise<boolean>} - Returns true if the deletion is successful.
 * @throws {Error} - Throws an error if the request fails.
 */
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

/**
 * Fetches a single venue by ID.
 * 
 * @param {string} venueId - The ID of the venue to fetch.
 * @returns {Promise<object>} - The venue data.
 * @throws {Error} - Throws an error if the request fails.
 */
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
