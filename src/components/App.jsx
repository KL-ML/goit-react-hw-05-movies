import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Header/Sidebar';
import { MovieDetails } from 'pages/MovieDetails';
import NotFound from 'pages/NotFound/NotFound';
import { Cast } from 'pages/MovieDetails/Cast';
import { Reviews } from 'pages/MovieDetails/Reviews';


export const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
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