
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Home';
import { PokemonDetails } from './PokemonDetails';
import './index.css'
import { List2 } from './list';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/"  index element={<Home />} />
      <Route path="/pokemon/:poke_id" element={<PokemonDetails />} />
      <Route path="/lists" element={<List2 />} />
    
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

