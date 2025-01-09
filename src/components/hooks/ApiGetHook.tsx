import {urlGetVenues} from "./url";
import { useState, useEffect } from 'react';

const venues = urlGetVenues;

// Define the shape of the venue object
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
  

function ApiGetHook(venues: string) {
    const [items, setItems] = useState<Venue[]>([]);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
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