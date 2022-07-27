import React from "react";
import { goToSignUp } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core";
import { DivButtonLogin } from "./styled";
import { DivContainerLogin } from "./styled";

const LoginPage = () => {
    
   const navigate = useNavigate()

    return (
        <DivContainerLogin>
            {/* <img src={LabEddit.png} alt="" /> */}
            <p>Projeto de rede social da Labenu</p>
            <div>
                <input placeholder="nome"></input>
                <input placeholder="senha"></input>
            </div>
            <DivButtonLogin>
                <Button 
                    variant="contained"
                    color="primary">
                    Continuar
                </Button>
                
                <Button 
                    onClick={()=>goToSignUp(navigate)}
                    variant="contained"
                    color="primary">
                    Criar Conta
                </Button>
            </DivButtonLogin>
        </DivContainerLogin>
    )
}
export default LoginPage; 