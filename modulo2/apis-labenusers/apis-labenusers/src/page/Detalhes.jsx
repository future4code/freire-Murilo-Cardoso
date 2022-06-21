import React from "react";
import axios from "axios";

export default class Detalhes extends React.Component {

    render() {
        return (
          <div> 
            <h1>Tela de detalhes</h1>
            <button onClick={this.props.onClickCadastrar}>Trocar tela</button>
          </div>
        );
      }
    }