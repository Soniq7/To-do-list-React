import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::before, ::after {
    box-sizing: inherit;
    }

    body {
    color: #222;
    background: #eee;
    line-height: 1.5;
    font-family: Montserrat, sans-serif;
    }
`;