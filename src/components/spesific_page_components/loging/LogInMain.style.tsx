import styled from "styled-components";
import logInImage from "../../images/holidayz-bg-image-login.jpg";


const StyledLogIn = styled.main`
    background-image: url(${logInImage}); 
    width: 100%;
    height: 84vh;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 


    h1{
        text-transform: uppercase;
        text-align: center;
        padding: 2rem;
        font-weight: normal;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 80%;
        margin: 2rem auto;
        padding: 2rem;
        background-color:var(--color-blue);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .formGroup{
         width: 100%;
        margin-bottom: 1.5rem;
    }

    label{
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: var(--color-light-orange);
    }

    input {
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;

        &:focus {
            border-color: #007BFF;
        }
    }

    button {
        margin: 1.5rem;
    }
`;



export default StyledLogIn;