import styled from "styled-components";

const StyledWorkWithUS = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 3rem 0;

    img {
        width: 100%; 
        height: auto; 
        object-fit: cover;
    }

    h2 {
        color: var(--color-light-orange);
        text-decoration: underline;
        text-transform: uppercase;
    }
    
    p {
        font-size: 1rem;
    }

    .container {
        display: flex;
        flex-wrap: wrap; 
        gap: 1rem; 
        justify-content: center; 
        background-color: var(--color-blue);
        padding: 4rem 0;
        margin: 2rem 0;
    }

    h4 {
        color: var(--color-blue);
        text-transform: uppercase;
        font-size: 2rem;
        padding: 1rem;
    }

    .innerContainer {
        background-color: #fff;
        flex: 1 1 calc(50% - 1rem); 
        width: calc(50% - 1rem);
        max-width: 600px;
        display: flex;
        flex-direction: row; 
        align-items: center; 
        gap: 1rem; 
        padding: 1rem;
        border-radius: 8px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 1rem;
    }

    .text {
        flex: 1;
        border-right: 5px solid var(--color-blue);
        padding-right: 1rem;
    }

    .image {
        width: 150px; 
        height: 150px;
    }

    @media (max-width: 768px) {
        .innerContainer {
            flex: 1 1 calc(100% - 1rem);
            text-align: center; 
        }

        img {
             width: 100px;
            height: 100px;
        }

        h4 {
            font-size: 1.5rem; 
        }
    }

    @media (max-width: 480px) {
        h4 {
            font-size: 1.2rem;
        }
                   img {
            width: 80px;
            height: 80px;
        }

    }
`;

export default StyledWorkWithUS;


