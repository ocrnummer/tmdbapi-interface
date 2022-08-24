import { Container, Image, Alert, Row, Col, Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";


// Services & utilitys
import { getActor } from '../services/TmdbAPI.js'

// Assets
import moviePlaceholder from '../assets/img/poster_placeholder.png'
import actorPlaceholder from '../assets/img/actor_placeholder.jpeg'

// Style
import '../assets/scss/App.scss'

const ActorPage = () => {
	const { id } = useParams()
	const { data, error, isLoading, isError } = useQuery(['get-actor', id], getActor)
	const BASE_URL = 'https://image.tmdb.org/t/p/w500'

	return (
		<Container>
			<Row>
				<Col className="d-flex justify-content-center py-3">
					{isLoading && (<BarLoader size={10} />)}
					{isError && (<Alert variant="danger">An error occured: {error.message}</Alert>)}
				</Col>
			</Row>

			{data && (

				<Container>
					<Row className="mb-4 d-flex justify-content-evenly">
						<Col sm={12} lg={6} xl={6} className="d-flex justify-content-end">
							<Image
								src={data.profile_path ? BASE_URL + data.profile_path : actorPlaceholder}
								className="image-poster"
							/>
						</Col>

						<Col sm={0} lg={6} xl={6} className="d-flex flex-column">
							<h2>{data.name}</h2>
							<p>{data.birthday}</p>
							<p>{data.place_of_birth}</p>
							<p>{data.biography}</p>
						</Col>
					</Row>

					<Row xs={4} className="g-4 d-flex flex-column align-items-center">
						<Col className="d-flex fl">
							<h3>Featured in</h3>
						</Col>

						<Col lg={8} md={4} sm={8} className="d-flex flex-wrap flex-row justify-content-start">
							{data.movie_credits.cast.map(movie => (
								<Link to={`/movie/${movie.id}`} className="anon-link">
									<Card key={movie.id} className="card-size m-3">
										<Card.Img
											variant="top"
											src={movie.poster_path ? BASE_URL + movie.poster_path : moviePlaceholder}
										/>
										<Card.Body>
											<Card.Title>{movie.title}</Card.Title>
										</Card.Body>
									</Card>
								</Link>
							))}
						</Col>
					</Row>
				</Container>
			)}
		</Container>
	)
}

export default ActorPage