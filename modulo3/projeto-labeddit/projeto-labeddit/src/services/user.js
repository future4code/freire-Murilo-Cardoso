import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../Routes/coordinator";


//LOGIN TOKEN API

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      alert("Login feito com sucesso!");
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
};


//CADASTRO TOKEN API

export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      alert("Cadastro feito com sucesso!");
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
};

//FUNÇÃO PARA IR PARA A PAGE FEED NÃO FUNCIONOU
