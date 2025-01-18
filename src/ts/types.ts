export interface Media {
    url: string;
    alt: string;
  }
  
  export interface Meta {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  }
  
  export interface Location {
    address: string;
    city: string;
    zip: string;
    country: string;
    continent: string;
    lat: number;
    lng: number;
  }
  
  export interface Venue {
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
  
  export interface Booking {
    id: string;
    userId: string;
    venueId: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    created: string;
    updated: string;
  }