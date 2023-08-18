import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  ::-webkit-scrollbar {
      width: 0;  /* Remove scrollbar space */
      background: transparent;  /* Optional: just make scrollbar invisible */
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    cursor: default;
    font-size: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent};
  }
  li {
    list-style: none;
  }
  p {
    font-size: 1.7rem;
    line-height: 1.5;
  }
`;

export default GlobalStyles;
