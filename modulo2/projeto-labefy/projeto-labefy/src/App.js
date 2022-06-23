import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaPlaylists from "./components/TelaPlaylists";

/* IMPORTACAO DE ARQUIVOS */


export default class App extends React.Component {
  
  state ={
    telaAtual: "inicio"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
    case "inicio":
      return <TelaCadastro irParaCadastro={this.irParaCadastro} />
    case "playlists":
      return <TelaPlaylists irParaPlaylists={this.irParaPlaylists} />
    default: 
      return <div>Erro!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  
  irParaPlaylists = () => {
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
