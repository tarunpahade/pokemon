import 'react-virtualized/styles.css';
import List from 'react-virtualized/dist/commonjs/List';
import { useState, useEffect } from 'react';

const listHeight = 400;
const rowHeight = 50;
const rowWidth = 1000;

interface Prop {
    index: number;
    key: string;
    
}

export const List2 = () => {
    const [pokemon, setPokemon] = useState([{ name: "" }]);
  
    const fetchPokemon = async (url:string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };
  
    useEffect(() => {
      fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=151");
    }, []);
  
    function renderRow({ index, key }: Prop) {
      const name = pokemon[index].name;
  
      return (
        <div key={key} className="row">
          <div className="image">{/* Your image content here */}</div>
          <div className="content">
            <div>{name}</div>
            <div>{Math.random()}</div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="App">
        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={renderRow}
            rowCount={pokemon.length}
            overscanRowCount={3}
          />
        </div>
      </div>
    );
  };
  