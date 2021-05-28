import React, { useState} from "react"
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";


import moviesData from './Components/MoviesData'
import MovieList from './Components/MovieList'
import AddList from "./Components/AddList";
import FilterList from './Components/FilterList'

const App = () => {
    //useState()
    const [movies, setMovieData] = useState(moviesData);
    const [SearchByName, setSearchByName] = useState("");
    const [SearchByRating, setSearchByRating] = useState(0)
    const filteredMovieName = (e) => {
    setSearchByName(e.target.value);
    };
    const filteredMovieRating = (e) => {
    setSearchByRating(e);
    };
    const Add = (NewMovie) => {
    setMovieData([...movies, NewMovie]);
    };
    return(
    <div className="App">
    <div className="Navbar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Star Wars </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
            <FilterList
            SearchByName={filteredMovieName}
            SearchByRating={filteredMovieRating}
            />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    <MovieList movie={movies} Name={SearchByName} Rating ={SearchByRating} />
    <Nav.Link className="Added">
            <AddList Add={Add} />
    </Nav.Link>
    <footer>
    <hr/>
    <h5>MoviesApp-Star Wars @2021</h5>
    </footer>
</div>
    )
}
export default App
