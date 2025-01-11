
// import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// export const CardsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 4rem;
//   margin: 5rem 2rem;
// `;

// export const StyledCard = styled.div<{ $backgroundImage: string }>`
//   position: relative;
//   width: 300px;
//   height: 400px;
//   background-image: url(${(props) => props.$backgroundImage});
//   background-size: cover;
//   background-position: center;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   overflow: hidden;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   animation: ${fadeIn} 0.5s ease-out;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
//   }
// `;

// export const CardContent = styled.div`
//   position: absolute;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.6);
//   width: 100%;
//   height: 50%;
//   box-sizing: border-box;
//   text-align: center;
// `;

// export const CardTitle = styled.h3`
//   margin: 0;
//   font-size: 1.7rem;
//   border-bottom: 2px solid var(--color-light-orange);
//   padding-bottom: 10px;
// `;

// export const CardDescription = styled.p`
//   margin: 25px 0;
//   font-size: 0.9rem;
// `;

// export const LoaderContainer = styled.div`
//   text-align: center;
//   font-size: 1.5rem;
// `;

// export const Heading = styled.h2`
//   text-align: center;
//   font-size: 2rem;
//   margin-bottom: 20px;
//   text-decoration: underline;
//   text-transform: uppercase;
//   color: var(--color-light-orange);
//   margin-top: 5rem;
// `;


import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Animation for card fade-in
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
  margin: 5rem 2rem;
`;

export const StyledCard = styled.div<{ $backgroundImage: string }>`
  position: relative;
  width: 300px;
  height: 400px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-light-orange);
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  line-height: 1.4;  // Keep line height for better readability
  display: -webkit-box;
  -webkit-line-clamp: 3; // Ensure it shows 3 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-top: 5rem;
`;
