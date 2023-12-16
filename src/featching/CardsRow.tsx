import { useEffect } from 'react';
import Card from '../components/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Props, pokeUrl } from './pokemon';


export const CardsRow = ({ type, movies, setPokemon }: Props) => {

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const contentHeight = document.body.scrollHeight;

        // You can adjust the offset as needed, e.g., 100 pixels before reaching the end
        if (contentHeight - scrollY - windowHeight < 100) {
            console.log("End of CardsRow reached");
            //  fetchMorePokemon(pokeUrl(type+'?offset='+offset+'&limit='+limit));
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        fetchPokemon(pokeUrl(type + '?offset=0&limit=126'));
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const fetchPokemon = async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPokemon(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    return (
        <div><Box
            sx={{
              
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                background: '#000',

                display: 'flex', // Add this to make flexbox work
            }}
        >
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{  paddingRight:'3%',
                paddingLeft:'3%',}}
                justifyContent="center" // Align items horizontally in the center
                alignItems="center" // Align items vertically in the center
            >
           <Cards movies={movies} />
            </Grid>
        </Box>

        </div>
    );
};
interface New {
movies:{
    name:string
}[]
}
const Cards =({movies}:New)=>{
    return(<>
    
        {movies.length === 0 ? null : (
            <>
                {movies.map((movie, index) => (
                    <Card id={index + 1} key={index + 1} name={movie.name} />
                ))}
            </>
        )}
    </>)
}