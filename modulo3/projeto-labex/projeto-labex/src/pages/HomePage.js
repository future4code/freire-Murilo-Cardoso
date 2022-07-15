import React from "react";
import {useNavigate} from 'react-router-dom'

export const HomePage = () => {
    
    const navigate = useNavigate()

    const goLoginPage = () => {
        navigate ("/Login")
    }
    const goToTravelPage = () => {
        navigate ("/trips/list")
    }

    return(
        <div>
            <strong>Labex</strong>
            <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
            <button onClick={goToTravelPage}>Viagens</button>
            <button onClick={goLoginPage}>Login</button>
        </div>
    )
}