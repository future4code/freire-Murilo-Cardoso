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
            <p>Labex - Sua viagem para o espaço!</p>
            <div className="homeLogin">
                <button onClick={goToTravelPage}>Viagens</button>
                <button onClick={goLoginPage}>Login</button>
            </div>
        </div>
    )
}