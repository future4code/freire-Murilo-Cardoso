import React from "react";
import styled from "styled-components";

const CardPersonStyled = styled.div`
border: 2px solid black;
text-align: center;
height: 400px;
width: 350px;

`
export default function CardPerson(props) {
    return(
        <div>
            <CardPersonStyled>
                <h3>CardPerson</h3>
                <div>
                    <p>Carla- 26 anos - textName</p>
                    <p>gosto de cachorros textBio</p>
                </div>
            </CardPersonStyled>       
        </div>
    )
}