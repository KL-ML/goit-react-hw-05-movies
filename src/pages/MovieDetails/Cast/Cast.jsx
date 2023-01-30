import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "services/movies.api";
import { toast } from "react-toastify";

export const Cast = () => {
   const [cast, setCast] = useState();
   const { movieId } = useParams();
   const purpose = `/movie/${movieId}/credits`;

   useEffect(() => {
      const fetchData = async (params, purpose) => {
         // setLoading(true);
         try {
            const data = await getMovies(params, purpose);
            setCast(data.cast);
         } catch (error) {
            toast.error(error);
         }
      };
      fetchData({}, purpose);
   }, [purpose]);

   return (
      <>
         <ul>
            {cast && cast.map(({ id, name, character, profile_path }) => {
               return (
                  <li key={id}>
                     <img src={
                        profile_path
                           ? `https://image.tmdb.org/t/p/w200${profile_path}`
                           : `http://www.suryalaya.org/images/no_image.jpg`
                     }
                        alt="actor"
                        loading="lazy"
                        width={120} />
                     <h3>{name}</h3>
                     <p>Character: {character}</p>
                  </li>
               )
            })
            }
         </ul>
         

      </>
   );
};