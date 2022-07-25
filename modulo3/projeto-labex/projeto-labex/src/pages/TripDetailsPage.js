import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";

/* FUNCAO QUE PROTEGE A PÁGINA SE O USUARIO N TEM SENHA */
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

export const TripDetailsPage = () => {
    
    const navigate = useNavigate();
    
    useProtectedPage();

    const goToHome = () => {
        navigate ("/AdminHome")
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
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}>Voltar</button>
        </div>
    )
}