// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Define global variables */
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --tertiary-color: #f1c40f;
    --text-color:white;

   
    --font-family: 'Arial, sans-serif';
  }

  /* Apply global styles */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
    background-color: #f0f0f0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: var(--secondary-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Add other global styles as needed */
`;

export default GlobalStyles;
