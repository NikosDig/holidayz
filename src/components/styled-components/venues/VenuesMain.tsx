/**
 * @file Venues.js
 * @description This file defines the Venues component which displays a list of venues fetched from an API.
 * Users can search for venues using a search bar.
 */

import StyledVenuesMain from "./VenuesMain.style";
import ApiGetHook from "../../hooks/ApiGetHook";
import { urlGetVenues } from "../../hooks/url";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {
    CardsContainer,
    StyledCard,
    CardContent,
    CardTitle,
    CardDescription,
} from "../home/HomeTopDestinations.style";

/**
 * Helper function to truncate text to a specified maximum length.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} - The truncated text with ellipsis if it exceeds the maximum length.
 */
function truncateText(text : string, maxLength : number) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

/**
 * Venues component to display a list of venues with a search functionality.
 * @component
 */
function Venues() {
    const url = urlGetVenues; 
    const { items, isError } = ApiGetHook(url);

    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (items && items.length > 0) {
            setLoading(false);
        }
    }, [items]);

    // Filter the items based on the search query
    const filteredItems = items.filter((item) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(lowerCaseQuery) ||
            item.description.toLowerCase().includes(lowerCaseQuery)
        );
    });

    return (
        <StyledVenuesMain>
            <div className="venuesHero">   
             </div>
            <h1>Venues</h1>
                    {/* Search Bar */}
                    <div className="Searchcontainer">
                        <input
                            type="text"
                            id="searchBar"
                            name="searchBar"
                            placeholder="Search venues..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div> 
            {isError ? (
                <p>Error fetching venues. Please try again later.</p>
            ) : loading ? (
                <p>Loading venues...</p>
            ) : filteredItems.length === 0 ? (
                <p>No venues found matching your search criteria.</p>
            ) : (
                <CardsContainer>
                    {filteredItems.map((item, index) => (
                        <StyledCard
                            key={index}
                            $backgroundImage={item.media[0]?.url}
                        >
                            <CardContent>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>
                                    {truncateText(item.description, 90)}
                                </CardDescription>
                                <Link to={`/product/${item.id}`} className="btn">
                                    Learn More
                                </Link>
                            </CardContent>
                        </StyledCard>
                    ))}
                </CardsContainer>
            )}
        </StyledVenuesMain>
    );
}

export default Venues;
