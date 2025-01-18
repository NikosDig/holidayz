import styled from "styled-components";

const StyledSpesificVenue = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;

  
  .imageContainer {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 500px; 
    border-radius: 8px;
  }


  h1,h2, h5 {
    text-decoration: underline;
    text-align: center;
    color: var(--color-light-orange);
    margin-bottom: 1rem;
  }

  
  .detailsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .orangeContainer {
    background-color: #fff; 
    border: 1px solid var(--color-orange);
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    min-width: 280px;
    box-sizing: border-box;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }

  
  .orangeContainer p {
    margin: 0.5rem 0;
  }

  
  .bookingSection {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #fff; 
    border-radius: 8px;
    border: 1px solid var(--color-orange);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }

  
  .bookingSection button {
    background-color: var(--color-orange);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .bookingSection button:hover {
    background-color: var(--color-orange); 
    color: var(--color-blue)
  }

  /* If not logged in, provide spacing and centered styling */
  .bookingSection p {
    color: #555;
    font-size: 1rem;
  }

 
  @media (max-width: 768px) {
    .detailsContainer {
      flex-direction: column;
      align-items: center;
    }

    .orangeContainer {
      min-width: 100%;
    }

    .imageContainer {
      margin: 1rem 0;
    }
  }
`;

export default StyledSpesificVenue;
