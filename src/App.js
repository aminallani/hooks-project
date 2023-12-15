import { useState } from "react";
import MovieList from "./MovieList";
import './App.css';
import Filter from "./Filter";
import AddMovie from './AddMovie';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from "./MovieDetail";



function App() {


  const [movies, setMovie] = useState([
    { id:1,
      title: "Superman",
      description: "Superman returns to Earth after spending five years in space examining his homeworld Krypton.",
      rating: "10",
      posterURL: "https://th.bing.com/th/id/OIP.mlc4bQWaTrd4gDucMplEwgHaJQ?rs=1&pid=ImgDetMain",
      trailer:"https://www.youtube.com/embed/T6DJcgm3wNY?si=xCXTxn9xMvLJmmnM"
    },
    {
      id:2,
      title: "Hangover",
      description: "When three friends get together for one last weekend-long bachelor party in Vegas, they think they had a good time.",
      rating: "10",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      trailer:"https://www.youtube.com/embed/tlize92ffnY?si=g2Vd2f4Xh96fx_gH"
    },

    {
      id:3,
      title: "2012",
      description: " Based on the 2012 phenomenon, its plot follows geologist Adrian Helmsley (Ejiofor) and novelist Jackson Curtis (Cusack) as they struggle to survive an eschatological sequence of events including earthquakes, volcanic eruptions, megatsunamis, and a global flood",
      rating: "10",
      posterURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193479_p_v8_aa.jpg",
      trailer:"https://www.youtube.com/embed/sFXGrTng0gQ?si=TfshS0covJv81dF-"
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
        <Route path="/" element={<><AddMovie onAddMovie={handleAddMovie} /> <MovieList movies={filteredMovies} /></>} />
        <Route path="/movies/:id" element={ <MovieDetail movies={movies} />} />
      </Routes>

    </>
  );
};
    

export default App;
