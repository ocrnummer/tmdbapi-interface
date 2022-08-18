import { Card } from 'react-bootstrap'

const MovieCard = ({ data }) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/w300'
	return (
		<Card>
			<Card.Img variant="top" src={BASE_URL + data.poster_path} />
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