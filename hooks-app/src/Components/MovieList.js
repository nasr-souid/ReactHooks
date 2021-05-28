
import MovieCard from "./MovieCard";
//MovieList gets the movies as props from App.js

const MovieList = ({ movie, Name, Rating }) => {

  return (
    <div className="MovieList">
      {movie
      .filter((el)=>el.Title.toLowerCase().includes(Name.toLowerCase())&& el.Rating>=Rating)
      .map(el =><MovieCard movie={el} key={el.id}/>)}
    </div>
  );
};

export default MovieList;