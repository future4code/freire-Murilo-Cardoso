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
      return <TelaCadastro irPlaylists={this.irPlaylists}/>
    case "playlists":
      return <TelaPlaylists irCadastro={this.irCadastro}/>
    default: 
      return <div>Erro!</div>
    }
  }

irCadastro = () => {
  this.setState({telaAtual: "inicio"})
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
