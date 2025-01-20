
import styled from "styled-components";

const StyledModal = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .modalContent {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    border-radius: 8px;
  }

  .closeButton {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    border: none;
    background: none;
    cursor: pointer;
  }

  .closeButton:hover,
  .closeButton:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .formGroup {
    margin-bottom: 1rem;
  }

  .formGroup label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .formGroup input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .formGroup p {
    margin-top: 0.5rem;
    color: #555;
  }

  #bookNow {
    background-color: var(--color-orange);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    display: block;
    margin: auto;
  }

  #bookNow:hover {
    background-color: var(--color-light-orange);
    color: var(--color-blue);
  }
`;

export default StyledModal;