import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";


export default function App() {

  const [pokeList, setPokeList] = useState([]);

  const [pokeName, setPokeName] = useState("");

  useEffect(()=>{

    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokelist(pokeList:response.data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

  const changePokename = (event) => {
    
    setPokeName(event.target.value);
  };

  const changePokeList = (event) => {
    
    setPokeList(event.target.value)
  }


  render() {
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </div>
    );
  }
}

