import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react"; 
import {AiOutlineClear} from 'react-icons/ai'

/* const StyledButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    box-align: center;
    align-items: center;
    padding: 10px 0px;
    border: 2px solid black;

` */
    const TodasMatch = styled.div`
    display: flex;
    height: 200px;
    width: 200px;
    flex-direction: column;
    `
    const ImagemMatch = styled.img`
    height: 50px;
    width: 50px;
    `
    const DivMatchs = styled.div`
    flex-direction: column;
    display: flex;
    `

    const ButtonClear = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    `
    const DivButton = styled.div`
    display: block;
    height: 300´px;
    `
export default function MatchCard() {

    const [listMatch, setListMatch] = useState([])

    useEffect(()=> {
        matchsOk()
    },[])

    const matchsOk = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/muriloA/matches')
    .then((response)=>{
        console.log(response.matches)
        setListMatch(response.data.matches)
    }).catch((err)=>{
        console.log(err)
    })
}
    const todasMatch = listMatch.map((user) => {
        return(
            <DivMatchs>
                <li key={user.id}>
                    <p>{user.name}</p>
                    <ImagemMatch src={user.photo} alt={user.photo_alt}/>
                </li>
            </DivMatchs>
        )
    })

    const clearMatch = () =>{
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/muriloA/clear')
    .then(() => {
        matchsOk()
    }).catch((err)=>{
        alert('erro!')
    })
    }

    return (
        <DivButton>
            <TodasMatch>{todasMatch}</TodasMatch>

                <ButtonClear onClick={clearMatch}><AiOutlineClear size="30px"/>Limpar matches!</ButtonClear>
        </DivButton>
    )

}
