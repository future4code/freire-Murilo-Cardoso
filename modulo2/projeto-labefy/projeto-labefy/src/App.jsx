import React from "react";
import Footer from "./components/Footer";
import Cadastro from "./components/Cadastro";
import Header from "./components/Header";
import CriarPlaylists from "./components/CriarPlaylists";
import TelaInicio from "./pages/TelaInicio"
/* IMPORTACAO DE ARQUIVOS */


export default class App extends React.Component {
  
  state = {
    telaAtual: "inicio"
  }

escolheTela = () => {
  switch (this.state.telaAtual) {
    case "inicio":
      return <TelaInicio />;
    case "cadastro":
      return <Cadastro irInicio={this.irInicio}/>;
    case "playlists":
      return <CriarPlaylists irInicio={this.irInicio}/>;
    default: 
      return <TelaInicio/>;
    }
  };

irCadastro = () => {
  this.setState({telaAtual: "cadastro"})
}
  
irPlaylists = () => {
  this.setState({telaAtual: "playlists"})
}

 irInicio = () => {
  this.setState({TelaAtual: "inicio"})
}

mudaTela = (nomeTela) => {
  this.setState({ telaAtual: nomeTela });
};
render(){
  return (
    <div>
      <div>
        <Header></Header>
      </div>
        <button onClick={() => this.mudaTela("playlists")}>Playlists</button>
        <button onClick={() => this.mudaTela("cadastro")}>Criar Playlists</button>
        <button onClick={() => this.mudaTela("inicio")}>Inicio</button>
        {this.escolheTela()}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
}
