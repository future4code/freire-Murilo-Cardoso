import React from "react";
import { goToSignUp } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    
   const navigate = useNavigate()

    return (
        <div>
            <h1>LoginPage</h1>

            <input placeholder="nome"></input>
            <input placeholder="senha"></input>
            <button>Continuar</button>

            <button onClick={()=>goToSignUp(navigate)}>Criar conta</button>
        </div>
    )
}
export default LoginPage; 