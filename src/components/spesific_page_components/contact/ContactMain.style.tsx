import styled from "styled-components";

const StyledContactMain = styled.div`
text-align: center;
margin: 0 0 1rem 0;
padding: 1rem;

h1 {
    text-transform: capitalize;
    padding: 1rem;
}

h5,p {
text-transform: uppercase;
color: var(--color-blue);
padding: 0.2rem;
}

.infoParagraph {
    text-transform: none;
    padding: 1rem;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 3rem 0;
    gap: 2.2rem;


           @media (max-width: 550px) {
            flex-direction: column;
            align-items: center; 
        }
}

.bgwhite {
      
        background-color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 200px;
        height: 165px;
    
}

svg{
    margin-bottom: 10px;
}

`;

export default StyledContactMain;