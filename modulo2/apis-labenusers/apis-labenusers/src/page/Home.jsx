import React from "react";
import axios from "axios";

export default class Home extends React.Component {
    /* incluir axios */
      state ={
        inputNome: "",
        inputEmail: ""
    }
    onChangeInputNome = (event) => {
      this.setState({ inputNome: event.target.value });
    };
    onChangeInputEmail = (event) => {
      this.setState({ inputEmail: event.target.value });
    };
    
    criarListaUsuario = () => {
      const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      };
      const request = axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "murilo-abreu-freire"
          }
        }
      );
      request
      .then((response)=>{
        alert("Você cadastrou legal")
        this.setState({nome:"", email:""})
      })
      .catch((error)=>{
        alert("Não foi possivel cadastrar")
      })
    }

    

      
    render() {
        return (
          <div> 
            <h1>Tela Inicial</h1>
            <button onClick={this.props.onClickverLista}>Trocar tela</button>
            <br></br>
            <input
                value={this.state.inputNome}
                onChange={this.onChangeInputNome}
                placeholder="Nome"/>
            
            <input 
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
                placeholder="E-mail"/>
            <button onClick={this.criarListaUsuario}>Criar usuário</button>
          </div>
        );
      }
    }

   