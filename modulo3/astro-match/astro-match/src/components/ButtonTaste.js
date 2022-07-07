import axios from "axios";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    box-align: center;
    align-items: center;
    padding: 10px 0px;
    border: 2px solid black;

`

export default function ButtonTaste(props) {

   const executeDislike = () => {
    console.log("dislike")
    }

   const executeLike =  () => {
    console.log("like")
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person')
    }
    return(
        <StyledButton>
            <button onClick={executeDislike}>Dislike</button>
            <button onClick={executeLike}>Like</button>
        </StyledButton>
    )
}