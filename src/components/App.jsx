// npm install react-router-dom

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Header/Sidebar';
import { MovieDetails } from 'pages/MovieDetails';


export const App = () => {
  return (
    <>
    <Sidebar />
        <Routes>
          <Route path="" element={<Home />}/>
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:12' element={<MovieDetails />} />
        </Routes>
    </>
  );
};

//Main Page
//-Header
//-Tranding today
// ..list of films
//--Film card 
//---Cast list
//---Reviews