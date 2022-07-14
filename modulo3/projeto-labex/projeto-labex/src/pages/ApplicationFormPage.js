import axios from "axios";
import React from "react";
import {useNavigate} from 'react-router-dom'
import { InputApplication } from "../services/styled";
import { InputApplicationInput } from "../services/styled";




export const ApplicationFormPage = () => {

    
/*     axios.get('url')
    .then((response) => {   
    
    })
    .catch((erro)=>{
        console.log(erro);
    }) */

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
             <InputApplication>
                <h1>Inscreva-se para uma viagem</h1>
                <select>
                    <option>Escolha uma Viagem</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <InputApplicationInput
                    placeholder="Nome"
                />
                <InputApplicationInput
                    placeholder="Idade"    
                />
                <InputApplicationInput
                    placeholder="Texto de Candidatura"
                />
                <InputApplicationInput
                    placeholder="Profissão"
                />
                <select>
                    <option>Escolha um Pais</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </InputApplication>
            <div>
                <button onClick={goToHome}>Voltar</button>
                <button>Enviar</button>
            </div>
        </div>
    )
}