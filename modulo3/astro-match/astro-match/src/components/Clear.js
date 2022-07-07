import React from "react";
import styled from "styled-components";

const ClearButton = styled.div`
    position: fixed;
    bottom: 5px;
    right: 5px;
`

export default function Clear(props) {
    return(
        <ClearButton>
            <button>Clear</button>
        </ClearButton>
    )
}