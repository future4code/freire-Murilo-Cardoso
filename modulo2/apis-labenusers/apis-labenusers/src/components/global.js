import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  *{
    box-sizing: border-box;
  }
    body {
    margin: 5;
    padding: 5;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #6699ff
  }

  p {
    margin: 0;
  }
  h2 {
    color: white;
    
  }
  `;
