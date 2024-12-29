
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-blue);
  width: 100%;
  height: 98px;
  padding: 0 20px;

  .logo {
    display: flex;
    align-items: center;
  }

  a {
    color: var(--color-white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s;
    text-transform: uppercase;

    &:hover {
      color: var(--color-light-orange);
    }
  }

  .active {
    color: var(--color-light-orange);
    border-bottom: 2px solid var(--color-light-orange);
  }

  /* Hamburger Menu */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    cursor: pointer;

    .bar {
      width: 30px;
      height: 4px;
      background-color: var(--color-light-orange);
      border-radius: 2px;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    margin-right: 30px;
  }

  .nav-links div {
    margin: 0 1rem;
  }

  .login-btn {
    background-color: var(--color-light-orange);
    color: var(--color-white);
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s, color 0.5s;

    &:hover {
      color: var(--color-blue);
    }
  }

  /* Media Query for Mobile */
  @media (max-width: 995px) {
    .nav-links {
      display: none;
      position: absolute;
      top: 98px;
      left: 0;
      width: 100%;
      background-color: var(--color-blue);
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      z-index: 100;
    }

    .nav-links.open {
      display: flex;
    }

    .hamburger {
      display: flex;
    }
  }

  @media (max-width: 480px) {
    .login-btn {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
`;

export default StyledNav;
