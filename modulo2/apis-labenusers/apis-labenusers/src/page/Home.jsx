import React from "react";
import axios from "axios";

export default class Home extends React.Component {
    /* incluir axios */
      state ={
        inputNome: "",
        inputEmail: ""
    }
    onChangeInputNome = (event) => {
      this.setState({ inputName: event.target.value });
    };
    onChangeInputEmail = (event) => {
      this.setState({ inputEmail: event.target.value });
    };
    
    criarListaUsuario = () => {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
      };
    }

/*     const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "murilo-abreu-freire"
        }
      }
    ); */

    render() {
        return (
          <div> 
            <h1>Tela Inicial</h1>
            <button onClick={this.props.onClickverLista}>trocar tela</button>
            <br></br>
            <input
                value={this.state.inputName}
                onChange={this.onChangeInput}
                placeholder="Nome">
            </input>
            <input 
                value={this.state.inputEmail}
                onChange={this.onChangeInput}
                placeholder="E-mail"></input>
            <button>Criar usuário</button>
          </div>
        );
      }
    }

   