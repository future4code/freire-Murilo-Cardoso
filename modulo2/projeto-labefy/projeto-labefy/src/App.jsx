import React from "react";
import TelaCadastro from "./pages/TelaCadastro";
import TelaPlaylists from "./pages/TelaPlaylists";

/* IMPORTACAO DE ARQUIVOS */


export default class App extends React.Component {
  
  state = {
    telaAtual: "inicio"
  }

escolheTela = () => {
  switch (this.state.telaAtual) {
    case "inicio":
      return <TelaCadastro irCadastro={this.irCadastro}/>
    case "playlists":
      return <TelaPlaylists irPlaylists={this.irPlaylists}/>
    default: 
      return <div>Erro!</div>
    }
  }

irCadastro = () => {
  this.setState({telaAtual: "cadastro"})
}
  
irPlaylists = () => {
  this.setState({telaAtual: "playlists"})
}

render(){
  return (
    <div>
      {this.escolheTela()}
    </div>
  );
}
}
