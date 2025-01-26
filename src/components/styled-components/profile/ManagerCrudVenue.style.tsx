import styled from 'styled-components';

const StyledManagerCrudVenue = styled.div<{ $isVisible: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;

    h2,h3 {
        font-size: 1.5rem;
        color: var(--color-light-orange);
        text-decoration: underline;
        margin-top: 20px;
    }

    legend {
        font-size: 1.3rem;
        color: var(--color-light-orange);
    
    }

    /* Add box shadow to input fields */
    input[type="text"],
    input[type="number"],
    textarea {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box-shadow */
        font-size: 1rem;
        transition: box-shadow 0.3s ease-in-out;
    }

    input[type="text"]:focus,
    input[type="number"]:focus,
    textarea:focus {
        outline: none;
        box-shadow: 0 0 8px rgba(0, 128, 255, 0.7); /* Focused input */
        border-color: #007bff; /* Focused border */
    }

    /* Style for labels */
    label {
        display: block;
        margin-bottom: 8px;
    }

    fieldset {
        margin: 20px 0;
        border: none;
    }

    button {
        padding: 10px 15px;
        background-color: var(--color-orange);
        color:white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--color-light-orange);
            color: var(--color-blue);
        }
    }

    .metaOptions {
    display: flex;
        flex-wrap: wrap; 
        justify-content: space-around; 
        gap: 10px; 
    }

    button {
        margin:10px 5px;
    }
`;

export default StyledManagerCrudVenue;
