import React from "react";


class Home extends React.Component {

    render() {
        return (
          <div> 
            <h1>Tela Inicial</h1>
            <button onClick={this.props.onClickverLista}>trocar tela</button>
            <input></input>
            <input></input>
            <button>Adicionar Playlist</button>
          </div>
        );
      }
    }

    export default Home;