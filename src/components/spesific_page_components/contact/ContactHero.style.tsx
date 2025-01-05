import styled from "styled-components";
import ContactHeroImage from "../../images/holidayz-contact-croped.png";



const StyledContactHero = styled.div`
    width:100%;
    height: 640px;
    background-image: url(${ContactHeroImage}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 

    @media (max-width: 768px) {
        height: 400px;
    }

    @media (max-width: 480px) {
        height: 250px;
    }

`;


export default StyledContactHero;