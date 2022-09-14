import React from "react";
import TextField from "@material-ui/core/TextField";
import { 
    ScreenContainerLogin,
    InputsContainer,
    DivButtonLogin } 
from "../LoginPage/styled";
import { Button } from "@material-ui/core";
import { DivCheckbox } from "./styled";
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom"

const SignUpPage = ({ rightButtonText, setRightButtonText}) => {

    const navigate = useNavigate()

    const [form, onChange, clear] = useForm ({name: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form)
        signUp(form, clear, navigate, setRightButtonText)
    }



    return (
        <ScreenContainerLogin>
            <InputsContainer>   
                <h2>Olá, boas vindas ao LabEddit </h2>

                <form onSubmit={onSubmitForm}>
                    <TextField
                        value={form.name}
                        name={"name"}
                        onChange={onChange}
                        placeholder="Nome de usuário"
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        required
                        margin={"normal"}
                            
                    />
                    <TextField 
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                        type={"email"}
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
                        value={form.password}
                        onChange={onChange}
                        name={"password"}
                        type={"password"}
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
                            type={"submit"}
                        >
                            Cadastrar
                        </Button>
                    </DivButtonLogin>
                </form>    
            </InputsContainer>
        </ScreenContainerLogin>
    )
}

export default SignUpPage;