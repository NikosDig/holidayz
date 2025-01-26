import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  text-align: center;

  .infoContainer {
    width: 100%;
  }

  .editProfileContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--color-light-orange);
    text-decoration: underline;
    margin-top: 20px;
    text-align: left;
  }

  .banner-container {
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 85px;
  }

  .banner {
    width: 100%;
    height: 100%;  
    object-fit: cover;
    border-radius: 10px;
  }

  .avatar {
    position: absolute;
    bottom: -50px;  
    left: 15px;     
    width: 200px;   
    height: 200px;
    border-radius: 50%;
    border: 5px solid white; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); 
  }

  .bookings {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bookings div {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
  }

  .bookings p {
    font-size: 1rem;
    color: #555;
    margin: 5px 0;
  }

  .loading {
    font-size: 1.5rem;
    color: #888;
    text-align: center;
  }

  svg {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    fill: #444;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* Button styles */
  .button {
    background-color: var(--color-orange);;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .button:hover {
    background-color: var(--color-orange);
    color: var(--color-blue);
  }

  .button:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(0, 123, 255, 0.5);
  }

  /* Delete button */
  .button.delete {
    background-color: #dc3545;
  }

  .button.delete:hover {
    background-color: #c82333;
  }

  .button.delete:focus {
    box-shadow: 0 0 5px 2px rgba(220, 53, 69, 0.5);
  }

  /* Modify the booking details container */
  .bookings .booking-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
  }

  .bookings .booking-item p {
    font-size: 1rem;
    color: #555;
  }

  /* Button Container */
  .button-container {
    display: flex;
    gap: 10px;
    justify-content: center;
    width: 30%;
  }

  /* Add this at the bottom of the existing styles */
@media (max-width: 768px) {
  .bookings .booking-item {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .bookings .booking-item p {
    margin-bottom: 10px;
  }

  .button-container {
    flex-direction: column; /* Stack buttons vertically */
    width: 100%;
    gap: 10px;
    align-items: flex-start;
  }

  .button-container .button {
    width: 100%;  /* Make buttons full width */
  }
}

/* Optional: For extra small screens */
@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .button-container .button {
    font-size: 0.9rem;  /* Smaller font size for buttons */
  }
}

`;

export default StyledProfile;
