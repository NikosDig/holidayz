import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  text-align: center;

  .infoContainer{
    width: 100%;
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
    color: #444;
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
    border: 5px solid white; /* Optional: adds a border around the avatar for contrast */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Optional: adds shadow around avatar */
  }

  .bookings ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .bookings li {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
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
`;

export default StyledProfile;
