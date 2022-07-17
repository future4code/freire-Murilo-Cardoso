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
            <p><strong>Labex</strong> - Sua viagem para o espaço!</p>
            <div className="homeLogin">
                <button onClick={goToTravelPage}>Viagens</button>
                <button onClick={goLoginPage}>Login</button>
            </div>
        </div>
    )
}