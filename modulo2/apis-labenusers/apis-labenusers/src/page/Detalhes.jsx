import React from "react";


export default class Detalhes extends React.Component {
    state = {
      pagina: ""
    };

    render() {
        return (
          <div> 
            <h1>Tela de detalhes</h1>
            <button onClick={this.props.onClickCadastrar}>trocar tela</button>
          </div>
        );
      }
    }