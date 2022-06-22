import React from "react";
import axios from "axios";
import styled from "styled-components"

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email:""
  }
  /*/\ Estado /\*/

  /* \/ função para mudar o nome e email \/ */

  handleNome = (event) => { /* <--- pode usar "ev" "e" "event" */
    this.setState({nome: event.target.value})

  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios.post(url, body, {
      headers: {
        Authorization: "murilo-abreu-freire"
      }
    })

    .then((res) => {
      alert("Usuário(a) cadastrado(a) com sucesso!")
      this.setState({nome: "", email: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  render(){
    return(
      <div>
        <button className="botaoTroca" onClick={this.props.irParaLista}>Ir para lista de usuários</button>
        <div className="container">
          <h2>Cadastro</h2>
          <input 
            placeholder={"nome"}        
            value={this.state.nome}  
            onChange={this.handleNome}
          />
          <input
          placeholder={"E-mail"}
          value={this.state.email}
          onChange={this.handleEmail}
          />
          <button className="botaoCadastra" onClick={this.fazerCadastro}>Cadastrar</button>
        </div>  
      </div>
    )
  }
}