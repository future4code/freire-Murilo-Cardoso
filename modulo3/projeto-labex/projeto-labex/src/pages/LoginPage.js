import React from "react";
import { useNavigate } from 'react-router-dom'
import { LoginInputDiv } from "../services/styled";
import { LoginInput } from "../services/styled";
import { useState } from "react";
import axios from "axios";


/* PÁGINA DE LOGIN */

export const LoginPage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    /* INPUT CONTROLADO */

    const onChangeEmail = (event) => {
    setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
    setPassword(event.target.value);
    };


    /* FUNCAO QUE RECEBE EMAIL E SENHA */

    const onSubmitLogin = () => {
        console.log(email, password);
    
    const body = {
      email: email,
      password: password
    };

    /* IMPLEMENTAÇÃO DA API DENTRO DA FUNCAO ONSUBMIT */

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate.push("/");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };
    
    
    

    /* MUDANÇA DE PAGINA COM NAVIGATE ROUTE */


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
            <LoginInputDiv>
                <LoginInput 
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="E-mail"
                />
                <LoginInput
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    placeholder="Senha"
                />
            </LoginInputDiv>
            <button onClick={goBack}>Voltar</button>
            <button onClick={onSubmitLogin}>Entrar</button>
        </div>
    )
}