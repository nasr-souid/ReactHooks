import { Card } from "react-bootstrap";
//Moviecard formats the data of a movie into a neat card 

const MovieCard = (props) => {
	return (
    <div className="MovieCard">
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.movie.Poster} className="poster" alt='movie'/>
			<Card.Body>
				<Card.Title>{props.movie.Title}</Card.Title>
				<Card.Text> {props.movie.Year}</Card.Text>
				<Card.Text> {props.movie.rating}</Card.Text>
				</Card.Body>
	 	</Card>
    </div>
  );
};
export default MovieCard
