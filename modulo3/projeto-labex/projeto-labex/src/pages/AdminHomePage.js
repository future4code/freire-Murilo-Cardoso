import React from "react";
import {useNavigate} from 'react-router-dom'

export const AdminHomePage = () => {
    
    const navigate = useNavigate()

    const goBack = () => {
        navigate (-1)
    }
    
    return(
        <div>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goBack}>Logout</button>
        </div>
    );
};