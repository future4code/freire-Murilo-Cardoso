import './App.css';
import React from 'react';
import Detalhes from './page/Detalhes';
import Home from './page/Home'
import axios from "axios";

export default class App extends React.Component {
  state = {
    trocarTela: true
  };
  
  cadastrar = () => {
    this.setState({trocarTela:true});
  };
  verLista = () =>{
    this.setState({trocarTela:false});
  };

  render() {  
    let pagina;
    if (this.state.trocarTela) {
      pagina = <Home onClickverLista={this.verLista}/>;
    } else {
      pagina = <Detalhes onClickCadastrar={this.cadastrar}/>;
    }
    return(
    <div>{pagina}</div>
    )
  }
  }