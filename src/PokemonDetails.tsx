/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import ImgMediaCard2 from "./components/bigCard";
import { Box } from "@mui/material";

interface pokeData {
    name: string;
    types: {
        type: {
            name: string
        }
    }[];
    stats: {
        base_stat: number
        stat: {
            name: string
        }
    }[]
    abilities: {
        ability: {
            name: string

        }
    }[]

}

export const PokemonDetails = () => {



    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    //function to get id from url
    const { poke_id } = useParams<{ poke_id: string }>();
    const [pokemon, setPokemon] = useState<pokeData>()
    console.log(BASE_URL + poke_id);
    console.log('hii');
    useEffect(() => {
        console.log(BASE_URL + poke_id);
        console.log('hii');

        fetchPokemon(BASE_URL + poke_id);

    }, [poke_id]);
    const fetchPokemon = async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);

            setPokemon(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };



    return (
        <div>
            <a href="/" style={{ position: 'absolute', top: 30, left: 40 }}> Back</a>
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 5,

                    display: 'flex', // Add this to make flexbox work
                }}
            >

                <ImgMediaCard2 name={pokemon?.name} id={0} types={pokemon?.types} stats={pokemon?.stats} abilities={pokemon?.abilities} />
            </Box>
        </div>
    )
}
