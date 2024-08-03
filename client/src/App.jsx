import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/movies")
      .then(response => setMovies(response.data))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <h1>Random Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title} ({movie.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;