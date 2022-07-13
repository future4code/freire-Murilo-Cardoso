import React from "react";
import {useNavigate} from 'react-router-dom'

export const TripDetailsPage = () => {
    
    
    
    
    const navigate = useNavigate()
    
    const goToHome = () => {
        navigate ("/HomePage")
    }
    
    return(
        <div>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}></button>
        </div>
    )
}