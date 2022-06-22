import React from "react";
import axios from "axios";

export default class Detalhes extends React.Component {
  state ={
    lista:[]
  }
  componentDidMount = () => {
    this.pegarUsuarios();
  };

  pegarUsuarios = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "murilo-abreu-freire"
        }
      }
    )
    
    .then((response)=>{
      this.setState({lista:response.data})
    })
    .catch((error)=>{
      alert(error.message)
    })
    }
    render() {
      const listaAtualizada = this.state.lista.map((usuario)=>{
        return<div key={usuario.id}>
          {usuario.name}<button>-</button>
        </div>
      })
        return (
          <div> 
            
          
            <h1>Tela de detalhes</h1>
            <button onClick={this.props.onClickCadastrar}>Trocar tela</button>
            <section>{listaAtualizada}</section>
          </div>
        );
      }
    }