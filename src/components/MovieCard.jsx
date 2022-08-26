// React & Bootstrap
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Assets
import '../assets/scss/App.scss'
import placeholder from '../assets/img/poster_placeholder.png'


const MovieCard = ({ data }) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/w500'

	return (
		<Card as={Link} to={`/movie/${data.id}`} className="my-3 d-flex anon-link">
			<Card.Img variant="left" src={data.poster_path ? BASE_URL + data.poster_path : placeholder} />

			<Card.Body>
				<Card.Title className="py-1 card-title"> {data.title} </Card.Title>
				<Card.Subtitle className="py-2 text-muted card-text">Rating: {data.vote_average} </Card.Subtitle>
				<Card.Subtitle className="py-2 text-muted card-text">Release date: {data.release_date} </Card.Subtitle>
			</Card.Body>
		</Card >
	)
}

export default MovieCard