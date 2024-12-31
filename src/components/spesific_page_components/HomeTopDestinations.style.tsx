import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 5rem 2rem 2rem 2rem;
`;

export const StyledCard = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 300px;
  height: 400px;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out;

  /* Hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);  /* Slight zoom effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height:50%;
  box-sizing: border-box;
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.7rem;
  border-bottom: 2px solid var(--color-light-orange);
  padding-bottom: 10px;
`;

export const CardDescription = styled.p`
  margin: 25px 0;
  font-size: 0.9rem;
`;

export const LoaderContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  text-decoration: underline;
  text-transform: uppercase;
  color: var(--color-light-orange);
  margin-top: 2rem;
`;

