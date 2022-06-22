import React from 'react';
import TelaListaUsuarios from './page/TelaListaUsuarios';
import TelaCadastro from './page/TelaCadastro';

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
        default:
          return <div>Erro! Página não encontrada! </div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () =>{
    this.setState({telaAtual: "lista"})
  }


  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}