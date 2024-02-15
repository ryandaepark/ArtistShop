import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

a{ 
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;