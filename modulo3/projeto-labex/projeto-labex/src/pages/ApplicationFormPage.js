import axios from "axios";
import React from "react";
import {useNavigate} from 'react-router-dom'

export const ApplicationFormPage = () => {
    
    
    axios.get('url')
    .then((response) => {   
    
    })
    .catch((erro)=>{
        console.log(erro);
    })

    const navigate = useNavigate()

    const goToHome = () => {
        navigate (-1)
    }

    return(
        <div>
            <strong>Inscreva-se para uma viagem</strong>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}