import React from "react";
import {useNavigate} from 'react-router-dom'

export const LoginPage = () => {
    
    const navigate = useNavigate()

    const goBack = () => {
        navigate (-1)
    }
    return(
        <div>
            <strong>Login</strong>
            <p>Para fazermos login como administrador</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goBack}>Voltar</button>
            <button>Entrar</button>
        </div>
    )
}