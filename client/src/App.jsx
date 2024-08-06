import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/server/movies/popular")
      .then(response => setMovies(response.data.results))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className='m-2 inline-block gap-3'>
      <h1 className='text-3xl'>Popular movies</h1>
      <div className=''>
        <ul>
          {movies.map((movie, index) => (
            <>
              <li key={index} className='float-right gap-6'>{movie.title} ({movie.release_date})</li>
              <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt={movie.title + "Poster"} className='w-32 m-3'/>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;