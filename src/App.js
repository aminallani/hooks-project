import { useState } from "react";
import MovieList from "./MovieList";
import './App.css';
import Filter from "./Filter";
import AddMovie from './AddMovie';
import Trailer from "./Trailer";
import {Route,Routes} from "react-router-dom"



function App() {


  const [movies, setMovie] = useState([
    { id:1,
      title: "Superman",
      description: "Superman returns to Earth after spending five years in space examining his homeworld Krypton.",
      rating: "10",
      posterURL: "https://th.bing.com/th/id/OIP.mlc4bQWaTrd4gDucMplEwgHaJQ?rs=1&pid=ImgDetMain",
      trailer:""
    },
    {
      title: "Hangover",
      description: "When three friends get together for one last weekend-long bachelor party in Vegas, they think they had a good time.",
      rating: "10",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },

  ])

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating.toString().includes(filter.rating))
  );

  const handleAddMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };

  
   



  return (
    <> 
    <Filter onFilterChange={handleFilterChange} />
    <Routes>
      <Route path="/" element={ <><AddMovie onAddMovie={handleAddMovie} /> <MovieList movies={filteredMovies} /> </>} /> 
      <Route path="/trailer" element={<Trailer/>} />

    </Routes>
    </>
);
};
    

export default App;
