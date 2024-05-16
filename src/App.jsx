import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MovieGrid from './MovieGrid';



const App = () => {

  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNowPlayingData(pageNumber).then((data) => {
      setMovies((prevMovies) => [...prevMovies, ...data]);
      setLoading(false);
    });
  }, [pageNumber]);

  const fetchNowPlayingData = async (pageToLoad) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageToLoad}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      setPageNumber(pageToLoad);
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default App;
