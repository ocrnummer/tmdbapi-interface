import { useState, useEffect } from 'react'
import { Container, Image, Alert, Row, Col, Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";


// Services & utilitys
import { getMovie } from '../services/TmdbAPI.js'

// Assets
import moviePlaceholder from '../assets/img/poster_placeholder.png'
import actorPlaceholder from '../assets/img/actor_placeholder.jpeg'

// Style
import '../assets/scss/App.scss'

const MoviePage = () => {
	const { id } = useParams()
	const { data, error, isLoading, isError } = useQuery(['get-movie', id], getMovie)
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
					<Row className="mb-4 d-flex justify-content-center">
						<Col xs={6} sm={6} lg={6} className="d-flex justify-content-end">
							<Image
								className="image-poster"
								src={data.poster_path ? BASE_URL + data.poster_path : moviePlaceholder}
							/>
						</Col>

						<Col sm={6} lg={6} className="d-flex flex-column">
							<h2>{data.original_title}</h2>
							<p className="tagline">{data.tagline}</p>
							<p>{data.release_date}</p>
							<div className="genre-div">
								{data.genres.map(genre =>
									<p key={genre.id} className="d-inline pe-4" >{genre.name}</p>
								)}
							</div>
						</Col>
					</Row>

					<Row lg={2} md={2} className="my-4 d-flex flex-column align-items-center">
						<Col>
							<h3>Plot sumary</h3>
							<p className="my-3">{data.overview}</p>
						</Col>
					</Row>

					<Row lg={2} md={2} className="my-4 d-flex flex-column align-items-center">
						<Col >
							<h3>Cast</h3>
							<ul className="list d-flex flex-column">
								{data.credits.cast.map(cast => (
									<li key={cast.id} className="d-flex">
										<Col lg={2} sm={2} className="my-3">
											<Image
												// className="actor-thumbnail" 
												src={cast.profile_path ? BASE_URL + cast.profile_path : actorPlaceholder} fluid></Image>
										</Col>

										<Col className="d-flex flex-column m-3">
											<Link to={`/person/${cast.id}`}>{cast.name}</Link>
											<p>as {cast.character}</p>
										</Col>
									</li>
								))}
							</ul>
						</Col>
					</Row>

					<Row xs={4} className="g-4 d-flex flex-column align-items-center">
						<Col>
							<h3>Similar movies</h3>
						</Col>

						<Col lg={8} md={4} sm={8} className="d-flex flex-wrap flex-row justify-content-between">
							{data.similar.results.slice(0, 5).map(movie => (
								<Link to={`/movie/${movie.id}`} className="anon-link">
									<Card key={movie.id} className="card-size">
										<Card.Img
											variant="top"
											src={movie.poster_path ? BASE_URL + movie.poster_path : actorPlaceholder}
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
			)
			}
		</Container >
	)
}

export default MoviePage