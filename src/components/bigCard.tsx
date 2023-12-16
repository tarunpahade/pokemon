
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
//import Button from '@mui/material/Button';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
// import { ButtonGroup } from '@mui/material';

interface Props {
    name: string | undefined;
    id: number;
    types: {
        type: {
            name: string
        }
    }[] | undefined
    stats: {
        base_stat: number
        stat: {
            name: string
        }
    }[] | undefined
    abilities: {
        ability: {
            name: string

        }
    }[] | undefined
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    paddingTop: 20,
    color: theme.palette.text.secondary,
}));

export default function ImgMediaCard2({ name, id, abilities, stats, types }: Props) {
  
    const [giphy] = useState(true)
  
    const capitalizeFirstLetter = (str: string | undefined) => {
        if (str == undefined) return null
        else if (typeof str === 'string') {
            return str.charAt(0).toUpperCase() + str.slice(1);

        }
    };


    return (
        <Item onClick={() => { }} style={{ margin: 20, marginTop: 0, border: 0, boxShadow: 'none' }} id={JSON.stringify(id)}>
            <Card sx={{ width: 230, height: 450 }}>
                <div style={{ height: '50%', width: '100%', backgroundSize: 'cover', backgroundColor: '#5fe2c9' }}>
                    <CardMedia
                        component="img"
                        alt={name as string}
                        height="80%"

                        width="100%"
                        style={{ objectFit: 'contain', paddingTop: '17%', color: 'transparent' }} // Add this line
                        image={giphy == true ? `https://play.pokemonshowdown.com/sprites/xyani/${name}.gif` : `https://img.pokemondb.net/artwork/large/${name}.jpg`}

                    />
                </div>
                <CardContent style={{ backgroundColor: '#fdc666', height: '50%', paddingBottom: 20 }}>

                    <Typography gutterBottom variant="caption" component="h1" style={{ marginBottom: 0 }} >
                        <strong style={{ fontSize: '15px' }}>Name:</strong> {capitalizeFirstLetter(name)}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="p">
                        <strong style={{ fontSize: '15px' }}>   Type:</strong>
                        {types?.map((ability) =>
                            <>   {capitalizeFirstLetter(ability.type.name)}   </>
                        )

                        }
                    </Typography>
                    <Typography gutterBottom variant="caption" component="p">
                        <strong style={{ fontSize: '15px' }}>Stats:</strong>       {stats?.map((ability) =>
                            <>   {capitalizeFirstLetter(ability.stat.name)}   </>
                        )

                        }
                    </Typography>
                    <Typography gutterBottom variant="caption" component="p">
                        <strong style={{ fontSize: '15px' }}>  Type:</strong>    {types?.map((ability) =>
                            <>   {capitalizeFirstLetter(ability.type.name)}   </>
                        )

                        }
                    </Typography>
                    <Typography gutterBottom variant="caption" component="p">
                        <strong style={{ fontSize: '15px' }}>Ability:</strong>   {abilities?.map((ability) =>
                            <>   {capitalizeFirstLetter(ability.ability.name)}   </>
                        )

                        }</Typography>
                    {/* <ButtonGroup variant="contained"
style={{    width: '10%',
    height: '10%'}}
                        aria-label="elevation buttons"
                        
                    >
                        <Button style={{fontSize:10}} onClick={() =>{ setgiphy(true)}}>Giphy</Button>
                        <Button style={{fontSize:10}} onClick={() => setgiphy(false)}>Png</Button>
                    </ButtonGroup> */}
                </CardContent>

            </Card>
        </Item>
    );
}


