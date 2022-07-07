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
    return(
        <StyledButton>
            <button>Dislike</button>
            <button>Like</button>
        </StyledButton>
    )
}