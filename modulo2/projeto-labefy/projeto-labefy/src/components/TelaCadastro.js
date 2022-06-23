import React from "react";

export default class TelaCadastro extends React.Component {
render(){
    return (
        <div>
            <h1>Labefy Music!</h1>
            <h3>Tela de Cadastro</h3>
            <button >Acesse as playlists</button>
            <input placeholder="digite o nome da playlist"></input>
            <button>Cadastrar Playlist</button>
        </div>
        );
    }
}