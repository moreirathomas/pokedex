import React, { useState, useEffect } from 'react';

function PokedexEntry(props) {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [pokemon, setPokemon] = useState({
    sprites: {},
    types: [
      {
        slot: '',
        type: {
          name: ''
        }
      }
    ]
  });

  const fetchPokemon = async () => {
    const pokemonfetched = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${props.number}`
    );
    const jsonPokemon = await pokemonfetched.json();

    setPokemon(jsonPokemon);
  };

  return (
    <div className="pokedex-entry">
      <div className="sprite-container">
        <img
          className="sprite"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        ></img>
      </div>
      <div className="info">
        <p className="entry-number">No. {props.number}</p>
        <p className="name">{pokemon.name}</p>
        <ul className="types-list">
          {pokemon.types.map(typeObject => (
            <li className="type" key={typeObject.slot}>
              {typeObject.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokedexEntry;
