/* eslint-disable react-hooks/exhaustive-deps */


const BASE_URL = "https://pokeapi.co/api/v2/";


export const pokeUrl = (type: string) => {
    return BASE_URL + type
}
export interface Props {
    type: string;
    title?: string;
    movies:{
        name:string
    }[];
    setPokemon:React.Dispatch<React.SetStateAction<{
        name: string;
    }[]>>
}


