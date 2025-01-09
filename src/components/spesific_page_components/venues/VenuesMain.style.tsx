import styled from "styled-components";
import venuesHero from "../../images/holidayz-venues-new.png";

const StyledVenuesMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .venuesHero {
        background-image: url(${venuesHero});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 50vh;
    }

    h1 {
            text-transform: uppercase;
            text-decoration: underline;
            padding: 1rem 0;
            smargin: 1rem 0;
    }

    .Searchcontainer {
        width: 90vw;
    }

    input {
                padding: 10px;
                margin: 1rem auto;
                width: 90%;
                border-radius: 10px;
                border: 1px solid #ddd;
                font-size: 1rem;
                display: block;
    }


`;

export default StyledVenuesMain;