import React from "react";

export default class TelaPlaylists extends React.Component {

  render(){
    return (
      <div>
        <h2>Tela de Playlist</h2>
        <button onClick={this.props.irCadastro}>Voltar</button>
      </div>
    );
  }
}