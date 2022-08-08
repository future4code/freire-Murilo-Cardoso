import React from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";

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


export const AdminHomePage = () => {
    
    useProtectedPage();

    const navigate = useNavigate()

    const goBack = () => {
        navigate (-1)
    }
    const goToCreateTravel = () => {
        navigate ("/admin/trips/create")
    }


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo/trip/:id",
            {
              headers: {
                auth: token
              }
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log("Deu erro: ", error.response);
          });
      }, []);

    return(
        <div>
            <strong>Painel Administrativo</strong>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTravel}>Criar Viagem</button>
                <button onClick={goBack}>Logout</button>
            </div>

        </div>
    );
};