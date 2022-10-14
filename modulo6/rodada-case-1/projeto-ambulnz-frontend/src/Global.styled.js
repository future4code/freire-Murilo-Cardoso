import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
    html,
    body,
    #root,
    * {
        margin: 0;
        padding: 0;
        width: 100%;
        box-sizing: border-box;
    }

    ul, li {
            list-style-type:none;
        }
    `
