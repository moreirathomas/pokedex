import React from 'react';
import PokedexEntry from './PokedexEntry';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: Array.from(Array(151), (e, i) => i + 1)
    };
  }

  render() {
    return (
      <div className="pokedex">
        {this.state.entries.map((entry, index) => (
          <PokedexEntry key={index} number={entry} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
