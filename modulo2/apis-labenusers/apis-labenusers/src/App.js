import './App.css';
import React from 'react';
import Detalhes from './components/Detalhes';

export default class App extends React.Component {
  state = {
    trocarTela: false
  };
  trocandoTela = () => {
    this.setState({ trocaTela: true });
  };
  voltandoTela = () =>{
    this.setState({trocaTela: false});
  };
  render() {  
    const onClickBotao = () => {
      alert('Você trocou de tela')
    }
    let detalhes;
    if (this.state.trocarTela) {
      detalhes = <App onClickLogout={this.voltandoTela} />;
    } else {
      detalhes = <Detalhes onClickLogin={this.trocandoTela} />;
    }
    return <div>{detalhes}</div>;
    }
  }
  return (
    <div>
      <h1>Tela Inicial</h1>
      <button onClick={onClickBotao}>Trocar de tela</button>
      <input></input>
      <input></input>
      <button>Criar usuário</button>
    </div>
  )
}
}