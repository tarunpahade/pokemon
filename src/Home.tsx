/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState, useMemo } from 'react';
import PrimarySearchAppBar from './components/Search';
import ButtonAppBar from './components/nav';
import '@mui/material';
import { CardsRow } from './featching/CardsRow';
import './index.css'
interface Movies {
  name: string;
}

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState<Movies[]>([]);

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  // Separate the state update from the filtering logic
  const filteredPokemon = useMemo(() => {
    return pokemon.filter((movie) => movie.name.includes(inputValue));
  }, [pokemon, inputValue]);

  const onSearch = () => {
    //console.log('search',inputValue);
  };

  return (
    <div>
      <ButtonAppBar />

      <PrimarySearchAppBar
        onSearch={onSearch}
        inputValue={inputValue}
        onChangeInput={onChangeInput}
      />

      <CardsRow
        type="pokemon/"
        title="pokemon"
        key={Math.random()}
        movies={filteredPokemon}
        setPokemon={setPokemon}
      />
    </div>
  );
}

export default Home;
