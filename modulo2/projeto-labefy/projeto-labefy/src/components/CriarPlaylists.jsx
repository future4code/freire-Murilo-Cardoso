import React from "react";
import axios from "axios";
import styled from "styled-components"

/* const CardPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
` */

export default class CriarPlaylists extends React.Component {
  
  state = {
    playlists: [],
    query: ""
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
    .then((res) => {
      this.setState({playlists: res.data})
      console.log(res)
    })
    .catch((err) => {
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
/* render() { 
  console.log(this.state.playlists)
  const listaPlaylists = this.state.playlists.map((user) => {
    return (
      <CardPlaylist>{user.name}</CardPlaylist>
  )
}) 

  return (
    <div>
      <h2>Tela de Playlist</h2>
       {listaPlaylists}
      </div>
    )
  }
} */
    updateQuery= (ev) => {
      this.setState({
        query: ev.target.value
    })
  }

/*   listaPlaylists = this.state.playlists.map((user) => {
    return ( 
      <CardPlaylist>{user.name}</CardPlaylist>
      )
  }) */

render(){
console.log(this.state.playlists)
  return(
    <div>
      <div>
        <h2>Lista das Playlists</h2> 
        <div>
          <input
            className="botaoPesquisar"        placeholder="pesquisar"
            value={this.state.query}
            onChange={this.updateQuery}
          />
          {this.state.query}
        </div>
      </div>
    </div>
  )
}
}