import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--forest-green);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 640px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(30px, 8vw, 60px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 50px);
  }
  ${TransitionStyles};
`;

export default GlobalStyle;