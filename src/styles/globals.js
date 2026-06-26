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
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(ellipse 80% 60% at 10% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 90% 10%, rgba(139, 92, 246, 0.14) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 50% 90%, rgba(244, 114, 182, 0.08) 0%, transparent 50%),
      ${(props) => props.theme.colors.background1};
    pointer-events: none;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ::selection {
    background: rgba(6, 182, 212, 0.35);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .BgAnimation__svg {
    position: absolute;
    top: 50%;
    right: -5%;
    transform: translateY(-50%);
    width: min(55vw, 600px);
    height: auto;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;

    @media screen and (max-width: 768px) {
      width: 80vw;
      right: -20%;
      opacity: 0.3;
    }
  }
`;

export default GlobalStyles;
