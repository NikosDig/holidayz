import styled from "styled-components";
import logInImage from "../../images/holidayz-bg-image-login.jpg";

const StyledLogIn = styled.main`
    background-image: url(${logInImage}); 
    width: 100%;
    height: 100vh;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
    padding: 1rem; /* Add padding to prevent edges from getting too close */

    h1 {
        text-transform: uppercase;
        text-align: center;
        padding: 1rem 2rem;
        font-weight: normal;
    }

    .signUpHere {
            text-align: center;
             padding: 1rem;
            color: var(--color-light-orange);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 500px; /* Constrain the form width */
        width: 100%; /* Full width on smaller screens */
        margin: auto;
        padding: 1rem 2rem;
        background-color: var(--color-blue);
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .formGroup {
        width: 100%;
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: var(--color-light-orange);
    }

    input, button {
        width: 100%;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-sizing: border-box;

        &:focus {
            border-color: #007BFF;
        }
    }

    .radioGroup {
        display: flex;
        gap: 1rem;
        justify-content: space-between; /* Spread the radio buttons evenly */
    }

    button {
        margin-top: 1.5rem;
        padding: 0.8rem 2rem;
    }


    .error {
        background-color: red;
        color: white;
        text-align: center;
    }

    @media (max-width: 768px) {
        form {
            padding: 1rem; /* Reduce padding on smaller screens */
        }
    }

    @media (max-width: 480px) {
        form {
            padding: 0.5rem; /* Further reduce padding for very small screens */
        }

        .radioGroup {
            flex-direction: column; /* Stack radio buttons vertically */
        }
    }
`;

export default StyledLogIn;
