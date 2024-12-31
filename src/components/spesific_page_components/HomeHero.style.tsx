import styled from "styled-components";
import holidayzHomeHero from "../images/holidayz-home-hero.jpg"

const StyledHomeHero = styled.div`
  background-image: url(${holidayzHomeHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  display: flex;
  gap: 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  position: relative;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  h4 {
    max-width: 1050px;
    word-wrap: break-word;
    color: var(--color-white);
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }
`;



export default StyledHomeHero;
