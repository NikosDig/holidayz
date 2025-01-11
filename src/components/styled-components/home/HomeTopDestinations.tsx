import ApiGetHook from "../../hooks/ApiGetHook";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    CardsContainer,
    StyledCard,
    CardContent,
    CardTitle,
    CardDescription,
    Heading,
    LoaderContainer
} from './HomeTopDestinations.style';

const Loader = () => (
    <LoaderContainer>
        <p>Loading...</p>
    </LoaderContainer>
);

const truncateText = (text: string, length: number) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

function HomeTopDestinations() {
    const { items, isError } = ApiGetHook("https://v2.api.noroff.dev/holidaze/venues");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (items && items.length > 0) {
            setLoading(false);
        }
    }, [items]);

    if (isError) {
        return <div>Error fetching data.</div>;
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Heading>Top Destinations</Heading>
            <CardsContainer>
                {items.length > 0 ? (
                    items.slice(0, 4).map((item, index) => (
                        <StyledCard 
                            key={index} 
                            $backgroundImage={item.media[0].url}
                        >
                            <CardContent>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>{truncateText(item.description, 90)}</CardDescription>
                                <Link to={`/product/${item.id}`} className="btn">learn more</Link>
                            </CardContent>
                        </StyledCard>
                    ))
                ) : (
                    <p>No top destinations available.</p>
                )}
            </CardsContainer>
        </div>
    );
}

export default HomeTopDestinations;
