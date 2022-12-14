// React & Bootstrap
import { Container, Image, Alert, Row, Col, Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader"

// Components
import BackButton from "../components/BackButton";

// Services & utilitys
import { getActor } from '../services/TmdbAPI.js'

// Assets
import moviePlaceholder from '../assets/img/poster_placeholder.png'
import actorPlaceholder from '../assets/img/actor_placeholder.jpeg'
import '../assets/scss/App.scss'

const ActorPage = () => {
	const { id } = useParams()
	const { data, error, isLoading, isError } = useQuery(['get-actor', id], getActor)
	const BASE_URL = 'https://image.tmdb.org/t/p/w500'

	return (
		<Container>

			<BackButton />

			<Row>
				<Col className="d-flex justify-content-center py-3">
					{isLoading && (<BarLoader size={10} />)}
					{isError && (<Alert variant="danger">An error occured: {error.message}</Alert>)}
				</Col>
			</Row>

			{data && (
				<>
					{/* Info */}
					<Row className="mb-4 d-flex justify-content-evenly">
						<Col sm={12} lg={6} xl={6} className="d-flex justify-content-end">
							<Image
								fluid
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

					{/* Medverkarnden */}
					<Row xs={1} className="g-4 d-flex flex-column align-items-center justify-content-center">
						<Col className="d-flex fl justify-content-center">
							<h3>Featured in</h3>
						</Col>
						<Col
							// lg={8} md={8} sm={8} 
							className="d-flex flex-wrap flex-row justify-content-center">
							{data.movie_credits.cast.map(movie => (
								<Link md={4} lg={6} key={movie.id} to={`/movie/${movie.id}`} className="anon-link">
									<Card key={movie.id} className="card-size m-3">
										<Card.Img
											fluid
											className="image-poster"
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
				</>
			)}
		</Container>
	)
}

export default ActorPage