import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react"; 


/* const StyledButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    box-align: center;
    align-items: center;
    padding: 10px 0px;
    border: 2px solid black;

` */

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
            <li key={user.id}><p>{user.name}</p><img src={user.photo} alt={user.photo_alt}/></li>
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
        <div>
            <div>{todasMatch}</div>
            <button onClick={clearMatch}>Limpar matches!</button>
        </div>
    )

}
