import styled from "styled-components";






const StyledContactHero = styled.div`
    width:100%;
    height: 640px;
    background-image: url(/images/holidayz-contact-croped.png);  
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