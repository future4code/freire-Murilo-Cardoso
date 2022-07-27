import React from "react";
import TextField from "@material-ui/core/TextField";
import { 
    ScreenContainerLogin,
    InputsContainer,
    DivButtonLogin } 
from "../LoginPage/styled";
import { Button } from "@material-ui/core";
import { DivCheckbox } from "./styled";


const SignUpPage = () => {
    return (
        <ScreenContainerLogin>
            <InputsContainer>   
                <h2>Olá, boas vindas ao LabEddit </h2>
                <TextField
                    placeholder="Nome de usuário"
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"normal"}
                        
                />
                <TextField 
                    placeholder="E-mail"
                    label={"E-email"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"normal"}
                />
                <TextField 
                    placeholder="Senha"
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"normal"}
                />
                <DivButtonLogin>
                        <p>
                        Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
                        </p>
                        <DivCheckbox>
                            <input 
                                type="checkbox" id="topping" name="topping" 
                                value="Paneer" 
                            />
                            <p>
                                Eu concordo em receber emails sobre coisas legais no Labeddit
                            </p>
                    </DivCheckbox>
                    <Button
                        margin={"normal"}
                        fullWidth
                        color={"primary"}
                        variant={"contained"}
                    >Cadastrar</Button>
                </DivButtonLogin>
            </InputsContainer>
        </ScreenContainerLogin>
    )
}

export default SignUpPage;