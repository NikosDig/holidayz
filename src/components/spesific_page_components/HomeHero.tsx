import React from "react";
import { Link } from "react-router-dom";
import StyledHomeHero from "./HomeHero.style";



function HomeHero() {
    return (
        <StyledHomeHero>
            <h1>HOLIDAYZ Tours & Travels</h1>
            <h2>Travel made simple,journey made special</h2>
            <h4>Discover the world wuth us! From exoric gateways tp local retreats,we design holidays that are as unique as you are. Adventure starts here</h4>
            <Link to="/venues" className="btn">explore more</Link>
        </StyledHomeHero>
    )
};



export default HomeHero;