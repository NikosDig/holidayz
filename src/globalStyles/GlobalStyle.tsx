import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --color-orange: #F2A74C;
    --color-white: #EFEFEF;
    --color-blue: #284E71;
    --color-light-orange: #F29829;
    height: 100%;
  }

  body {
    height: 100%;
    font-family: "Montserrat", Arial, sans-serif;
  }

  a {
    color: var(--color-white);
    text-decoration: none;
  }
  
.btn {
        background-color: var(--color-light-orange);
        color: var(--color-white);
        padding: 0.6rem 2rem;
        border: none;
        border-radius: 30px;
        font-size: 1.2rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.3s, color 0.5s;
      &:hover {
                color: var(--color-blue);
              }
      }

  h1 {
    color: var(--color-light-orange);
    font-size: 2.6rem;
    font-weight: bold;
    margin: 0 0 0.5rem;
    line-height: 1.2;
  }

  h2, h3, h4, h5, h6 {
    color: var(--color-white);
  }

  h3, h4, h5, h6 {
    font-weight: normal;
  }

  h2 {
    font-size: 2.3rem;
    font-weight: semi-bold;
    margin: 0 0 0.5rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 2rem;
    font-weight: normal;
    margin: 0 0 0.5rem;
    line-height: 1.4;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0 0.5rem;
    line-height: 1.5;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0 0 0.5rem;
    line-height: 1.5;
  }

  h6 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.125rem;
    }
    h5 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.875rem;
    }
    a {
      font-size: 0.875rem;
    }
  }
`;

export default GlobalStyle;
