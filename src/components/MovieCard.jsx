import { Card } from 'react-bootstrap'
import placeholder from '../assets/img/poster_placeholder.png'


const MovieCard = ({ data }) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/w200'

	return (
		<Card>
			<Card.Img variant="top" src={data.poster_path ? BASE_URL + data.poster_path : placeholder} />
			<Card.Body>
				<Card.Title className="h2"> {data.title} </Card.Title>
				<Card.Subtitle className="mb-2 text-muted"> Rating: {data.vote_average} </Card.Subtitle>
				{/* <Card.Text> </Card.Text> */}

				<Card.Text> Release date: {data.release_date} </Card.Text>
			</Card.Body>
		</Card>
	)
}

export default MovieCard