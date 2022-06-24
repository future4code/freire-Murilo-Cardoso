import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
    state = {
        playlist: "",
    }

    handlePlaylist = (event) =>{
        this.setState({playlist: event.target.value})
    }

    cadastrarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        
        axios.post(url, body, {
            headers: {
                Authorization: "murilo-abreu-freire"
            }
        })
        .then((res)=>{
            alert("Você cadastrou sua playlist com sucesso!")
        })
        .catch((err)=>{
            alert("Já existe uma playlist com esse nome!")
        });
    }
render(){
    return (
        <div>
            <button onClick={this.props.irPlaylist}>Playlists</button>
            <h1>Labefy Music!</h1>
            <h3>Crie sua playlist!</h3>
            <input
                placeholder={"digite o nome da playlist"}
                value={this.state.playlist}
                onChange={this.handlePlaylist}
            />
            <button onClick={this.cadastrarPlaylist}>Cadastrar Playlist</button>
        </div>
        );
    }
}