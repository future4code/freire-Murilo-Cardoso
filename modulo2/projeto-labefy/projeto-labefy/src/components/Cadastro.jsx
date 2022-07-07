import React from "react";
import axios from "axios";

export default class Cadastro extends React.Component {
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
            this.setState({playlist: ""})
        })
        .catch((err)=>{
            alert("Já existe uma playlist com esse nome!")
        });
    }

render(){
    return (
        <div>
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