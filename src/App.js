import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MoviesList from "./components/MoviesList";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  
  const fetchMovies = (searchQuery) => {
    axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=c70b756b`)
    .then(res => {
      console.log("fetch movies response:", res.data.Search)
      setMovies(res.data.Search)
    })
  }

  useEffect(() => {
    fetchMovies(searchQuery)
  }, [searchQuery])

  return (
    <div className="container-fluid main-container">
      <Header />
      <div className="row d-flex align-items-center mt-4 mb-4">        
        <SearchBox setSearchQuery={setSearchQuery} />
      </div>
      <h1>Movies</h1>

      <div className="row">
        <MoviesList movies={movies} />                
      </div>
      
    </div>
  );
}

export default App;
