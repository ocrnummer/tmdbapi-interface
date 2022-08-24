import { useState, useEffect } from 'react'
import { Container, Image, Alert } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";


// Services & utilitys
import { getMovie } from '../services/TmdbAPI.js'

// Assets
import placeholder from '../assets/img/poster_placeholder.png'

const MoviePage = () => {
	const { id } = useParams()

	const { data, error, isLoading, isError } = useQuery(['get-movie', id], getMovie)

	const BASE_URL = 'https://image.tmdb.org/t/p/w200'

	return (
		<Container>

			{isLoading && (<BarLoader size={10} />)}

			{isError && (<Alert variant="danger">An error occured: {error.message}</Alert>)}

			{data && (
				<Container className="d-flex">
					<div>
						<Image src={data.poster_path ? BASE_URL + data.poster_path : placeholder} fluid></Image>
					</div>

					<div>
						<h2>{data.original_title}</h2>

						<h4>{data.tagline}</h4>

						<p>{data.release_date}</p>

						{data.genres.map(genre =>
							<p key={genre.id} className="d-inline px-2" >{genre.name}</p>

							// <Link to={`/genre/${genre.id}`} key={genre.id} className="d-inline px-2" >{genre.name}</Link>

						)}
						<p>{data.overview}</p>

						<h3>Cast</h3>
						<ul>
							{data.credits.cast.map(cast => (
								<li key={cast.id} className="d-flex">
									<p> Actor:
										<Link to={`/person/${cast.id}`}>{cast.name}</Link> as {cast.character}</p>
								</li>
							))}
						</ul>

						<h3>Similar movies</h3>
						<ul>
							{data.similar.results.slice(0, 5).map(movie => (
								<li key={movie.id} className="d-flex">
									<Link to={`/movie/${movie.id}`}>
										{movie.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Container>
			)}
		</Container>
	)
}

export default MoviePage