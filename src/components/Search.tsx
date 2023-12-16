
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginTop:100,
  marginBottom:100,
  width: '80%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '80%',
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
interface Props {
    onChangeInput:(value:string)=>void;
    inputValue:string;
    onSearch?:()=>void
}
export default function PrimarySearchAppBar({onChangeInput,inputValue}: Props) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        onChangeInput(e.target.value);
      };
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
     
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
           
               
            <StyledInputBase
              placeholder="Search…"
              onChange={handleInputChange}
              value={inputValue}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
