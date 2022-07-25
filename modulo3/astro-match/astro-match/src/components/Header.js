import React from "react";
import imgLogo from '../img/logoAstro.png';
import imgMessage from '../img/messageBalon2.png'
import styled from "styled-components";
/* import React, { useEffect, useState } from "react"; */
import {FiHome} from "react-icons/fi"

const HeaderStyled = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    box-align: center;
    align-items: center;
    padding: 0px 10px;
`
const ImageLogoStyled = styled.img`

`
const Button = styled.button`
border: none;
background-color: transparent;
color: #7a157e;

`
export default function Header(props) {
    return(
        <HeaderStyled>
            <Button onClick={props.home}><FiHome size="25px" color="#b91799e0f"/></Button>
            <ImageLogoStyled/>
            <img src={imgLogo} alt="Imagem Logo"></img>
            <div>

                <img onClick={props.match} src={imgMessage} alt="Imagem balão menssagem"></img>
            </div>
        </HeaderStyled>
    )
}