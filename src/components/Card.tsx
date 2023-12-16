
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import '../index.css'


import Paper from '@mui/material/Paper';

interface Props {
  name: string;
  id: number;
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  paddingTop: 20,
  color: theme.palette.text.secondary,
}));
export default function ImgMediaCard({ name, id }: Props) {
  return (
    <Item onClick={() => { }} style={{ margin: 20, marginTop: 0, padding: 0 }}>
      <Card sx={{ width: 230, height: 350, border: 0, boxShadow: 'none' }}>
        <div style={{
          height: '60%',
          width: '80%',
          padding: '10%',
          paddingBottom: 0,
          paddingTop: 0,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CardMedia
            component="img"
            alt={name}
            height="100%"
            width="100%"
            style={{ objectFit: 'contain' }} // Add this line
            image={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          />
        </div>
        <div style={{ backgroundColor: '#eee', width: '230%', height: '40%' ,    fontFamily: 'monospace'}} >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions>

            <Button size="small" >
              <a href={'pokemon/' + id} >
                Details

              </a>
            </Button>
          </CardActions>
        </div>

      </Card>
    </Item>
  );
}

