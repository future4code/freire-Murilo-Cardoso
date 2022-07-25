import axios from "axios";
/* import React, { useEffect, useState } from "react"; */
import styled from "styled-components";

const ClearButton = styled.div`
    position: fixed;
    bottom: 5px;
    right: 5px;
`

export default function Clear(props) {
    return(
        <ClearButton>
            <button /* onClick={clearButton} */>Clear</button>
        </ClearButton>
    )
}