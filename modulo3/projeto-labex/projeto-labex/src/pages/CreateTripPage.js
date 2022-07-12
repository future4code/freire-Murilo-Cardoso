import React from "react";
import {useNavigate} from 'react-router-dom'

export const CreateTripPage = () => {
    

    const navigate = useNavigate()

    const goToHome = () => {
        navigate ("/HomePage")
    }

    return(
        <div>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}