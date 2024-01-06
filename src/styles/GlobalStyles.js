import { createGlobalStyle } from "styled-components";
import '@fontsource/cedarville-cursive';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/caveat'
import '@fontsource/ibm-plex-mono';


const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family:  sans-serif;
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