import React from "react";
import { goToSignUp } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core";
import { DivButtonLogin, LogoTextImage} from "./styled";
import { ScreenContainerLogin } from "./styled";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import logoprincipal from "../../assets/logoprincipal.png"
import { login } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
    
   const navigate = useNavigate()
    
   const [form, onChange, clear] = useForm({email: "", password: ""})
   



   const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form)
        login(form, clear, navigate)
   }
   



    return (
        <ScreenContainerLogin>
            <LogoTextImage src={logoprincipal}/>
            <p>Projeto de rede social da Labenu</p>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        type={"email"}
                        name={"email"}
                        label={"E-email"}
                        value={form.email}
                        onChange={onChange}
                        variant={"outlined"}
                        fullWidth
                        required
                    />
                    <TextField 
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant="outlined"
                        fullWidth
                        margin={"normal"}
                        required
                     />
                    <DivButtonLogin>
                        <Button 
                            type={"submit"}
                            margin={"normal"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                            >
                            Fazer Login
                        </Button>
                        <hr/>
                        <Button 
                            margin={"normal"}
                            fullWidth
                            onClick={()=>goToSignUp(navigate)}
                            variant={"text"}
                            color={"primary"}
                            >
                            Criar Conta
                        </Button>
                    </DivButtonLogin>
                </form>
            </InputsContainer>
        </ScreenContainerLogin>
    )
}
export default LoginPage; 