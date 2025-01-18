import styled from 'styled-components';

const StyledModal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 100%;
    position: relative;
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .formGroup {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

 #bookNow {
  background-color: var(--color-light-orange);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-light-orange);
    color: var(--color-blue)
  }
}   
`;

export default StyledModal;
