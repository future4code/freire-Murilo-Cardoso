import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function PokeCard() {
    
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() =>{
        pegaPokemon(props.pokemon)
    },[props.pokemon]);

  const pegaPokemon = (pokemon) => {
        console.log("chegou "+ pokemon)
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            {
                headers : { Authorization: "murilo-abreu-freire"}
            })
            .then((res) => {
                console.log(res.data.result.pokeList)
                setPokeList(res.data.resulst.pokeList);
            })
            .catch((err)=>{
                console.log(err);
            });
    };  
    
    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </div>
    )

}
