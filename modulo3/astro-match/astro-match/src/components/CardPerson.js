import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import {FcLike} from "react-icons/fc"
import {IoIosHeartDislike} from "react-icons/io"
const CardPersonStyled = styled.div`
text-align: center;
height: 500px;
width: 360px;
`
const Imagem = styled.img`
height: 350px;
width: 350px;
align-items: center;
margin-left: 20px;
box-shadow: 1px 2px 2px black;
`
const Button = styled.button`
display: inline;
margin-bottom: 15px;
border: none;
background-color: transparent;
size: 20px;
`
const Strong = styled.strong`
font-size: 20px;
display: flex;
padding-left: 10px;
`
const Idade = styled.p`
display: inline;
`

const Biografia = styled.div`
display: flex;
font-style: italic;
margin-left: 10px;
margin-top: 10px;
`
const Div = styled.div`
display: flex;
align-items: center;
margin: 10px;
gap: 10px;
`
const DivButton = styled.div`
display: flex;
justify-content: space-around;
`
export default function CardPerson() {

    const [perfilCard, setPerfilCard] = useState({});

    useEffect(()=> {
        executeCard();
    },[]);

    const executeCard = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/muriloA/person', {
        }).then((response) => {
            setPerfilCard(response.data.profile);
        }).catch((err) => {
            console.log(err);
        })
    }

    const matchOk = () => {
        const body = {
            id: perfilCard.id,
            choice: true 
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/muriloA/choose-person', body)
        .then((response) =>{
            executeCard()
            if(response.data.isMatch === true) {
                alert("match!")
            }
        })        
        .catch((err) => {
            alert(err,'opa houve um erro!')
        })
    }
    return(
        <div>
            <CardPersonStyled>
                <Imagem src={perfilCard.photo}  alt={perfilCard.photo_alt}/>
                    <Div>
                        <p><Strong>{perfilCard.name},</Strong></p>
                        <Idade>{perfilCard.age} anos</Idade>
                    </Div>
                    <Biografia>{perfilCard.bio}</Biografia>
                    <DivButton>
                        <Button onClick={()=>{executeCard()}}><IoIosHeartDislike  size="50px"/></Button>
                        <Button  onClick={()=>{matchOk()}}><FcLike size="50px"/></Button>
                    </DivButton>
            </CardPersonStyled>       
        </div>
    )
}