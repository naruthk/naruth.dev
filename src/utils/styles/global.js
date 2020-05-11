import css from '@emotion/css';
import { fonts, colors, responsiveFontSizes } from "./constants";

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');

  html, body {
    margin: 0px;
    padding: 0px;
    color: ${colors.gray};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.bgLight};
  }

  html {
    font-family: Inter,${fonts.primary};
  }

  code {
    font-family: ${fonts.code};
  }

  * {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto !important;
  }

  #___gatsby > div {
    display: flex;
    flex-direction: column;
  }

  a, a:visited {
    color: ${colors.dark};
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.blue}
  }

  hr {
    margin: 50px 0;
    border: none;
    border-top: 1px solid ${colors.lightGrey};
    background:none;
  }

  button {
    border-radius: 4px;
    background-color: ${colors.green};
    border: none;
    color: ${colors.white};
    padding: 10px 15px;
    border: 1px solid ${colors.green};
    :hover {
      background: ${colors.blue};
      border: 1px solid ${colors.blue};
    }
  }

  h1 { font-size: ${responsiveFontSizes.xlarge} }
  h2 {
    font-size: ${responsiveFontSizes.large};
  }
  h3 {
    font-size: ${responsiveFontSizes.medium};
  }
  p {
    font-size: ${responsiveFontSizes.normal};
    line-height: 1.7em;
  }

  .react-icons {
    vertical-align: middle;
  }

  img {
    width: 100%;
  }
`;
