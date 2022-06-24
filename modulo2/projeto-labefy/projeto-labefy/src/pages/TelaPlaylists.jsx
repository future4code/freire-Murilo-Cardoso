import React from "react";
import axios from "axios";
import styled from "styled-components";
/* https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists */

const CardPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
`

export default class TelaPlaylists extends React.Component {
  
  state = {
    playlist: []
  }

  componentDidMount () {
    this.pegarPlaylists()
  }
  
  pegarPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
      headers: {
        Authorization: "murilo-abreu-freire"
      }
    })
    .then((res)=>{
      this.setState({playlist: res.data})
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
      alert("Erro!")
    })
  }

/*   delePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "murilo-abreu-freire"
      }
    })
    .then((res)=> {
      alert("Usuário(a) deletado com sucesso!")
      this.pegarUsuarios()
    })
    .catch((err)=>{
      alert("Ocorreu um erro, tente novamente!")
    })
  } */

  render() { 
    return (
      <div>
        <h2>Tela de Playlist</h2>
        <button onClick={this.props.irCadastro}>Voltar</button>
      </div>
    );
  }
}