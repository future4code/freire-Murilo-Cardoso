import React from "react";
import imgLogo from '../img/logoAstro.png';
import imgMessage from '../img/messageBalon2.png'
import styled from "styled-components";

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
    display: flex;
    align-items: center;
`
export default function Header(props) {
    return(
        <HeaderStyled>
            <ImageLogoStyled/>
            <img src={imgLogo} alt="Imagem Logo"></img>
            <div>
                <img src={imgMessage} alt="Imagem balão menssagem"></img>
            </div>
        </HeaderStyled>
    )
}