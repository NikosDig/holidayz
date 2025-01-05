import styled from "styled-components";

const StyledHomeContact = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    //max-width: 1400px;
    margin: auto;

    h2 {
        color: var(--color-light-orange);
        text-decoration: underline;
        text-transform: uppercase;
    }
    
    .container {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
        width: 100%;
    }

    .imageContainer {
        flex-grow:1;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        max-height: 710px;
        min-height: 200px;
    }

    p {
        text-transform: uppercase;
        color: var(--color-blue);
       margin: 1rem 2rem 1rem 2rem;
       padding: 2rem 0;
       font-weight: bold;
       font-size: 1rem;

       @media (max-width: 1200px) {
            padding: 1.2rem 0;
        }

        @media (max-width: 768px) {
            padding: 0.9rem 0;
            font-size: 0.8rem;
            margin: 1rem 0.5rem 1rem 0;
        }

        @media (max-width: 480px) {
            padding: 0.6rem 0;
        }
    }
    

`


export default StyledHomeContact;