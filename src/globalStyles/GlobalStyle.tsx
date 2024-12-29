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
body{
height:100%;
font-familly:"Montserat,Arial, sans-serif";
}
a{
color: var(--color-white);
text-decoration: none;
}
`


export default GlobalStyle;