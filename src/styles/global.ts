import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  #root, body, html {
    -webkit-font-smoothing: antialiased;
  
  }

  ${({ theme }) => css`
    html {
      font-size: 10px;
      background: ${theme.colors.white};
    }

    body,
    input,
    button {
      font-family: ${theme.font.family};
    }
  `}
 
  button {
    cursor: pointer;
  }
`;
