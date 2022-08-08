import React from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

/* FUNCAO QUE PROTEGE A PAGINA SE O USUARIO N TEM SENHA */

const useProtectedPage = () => {
    
    
    const navigate = useNavigate();
    
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        navigate("/");
      }
    }, []);
  };

   ///////////////////                 ///////////

export const CreateTripPage = () => {
    
    useProtectedPage();

    const navigate = useNavigate()

/*     const goToHome = () => {
        navigate ("/")
    } */
    const goBack = () => {
        navigate (-1)
    }

    return(
        <div>
            <strong>Criar viagem!</strong>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <form> {/* Formulario */}
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button>Criar</button>
            </div>
        </div>
    )
}