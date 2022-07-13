import React from "react";
import {useNavigate} from 'react-router-dom'

export const ListTripsPage = () => {
    
    const navigate = useNavigate()

    const goToHome = () => {
        navigate (-1)
    }
    const goToSingUp = () => {
        navigate("/trips/application")
    }


    return(
        <div>
            <strong>Lista de Viagens!</strong>
            <p>Para vermos todas as viagens</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToSingUp}>Inscrever-se</button>
        </div>
    );
};