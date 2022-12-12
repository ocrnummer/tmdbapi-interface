// React & Bootstrap
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams, useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button, Alert } from 'react-bootstrap'
import BarLoader from "react-spinners/BarLoader";

// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services, hooks & utilities
import { discoverMovies } from '../services/TmdbAPI.js'
import { genres } from '../utils/genres.js' // gör till hook
import { sorting } from '../utils/sorting.js'

// Assets
import '../assets/scss/App.scss'

const GenrePage = () => {
	const [pagetitle, setPagetitle] = useState('')
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		genre: 28,
		sort: '',
	})

	const page = searchParams.get('page')
	const genre = searchParams.get('genre')
	const sort = searchParams.get('sort')

	const { data, error, isLoading, isFetching, isError } = useQuery(['discover-movies', page, genre, sort], discoverMovies)

	useEffect(() => {
		const genreName = genres.find(g => g.id == genre)
		setPagetitle(genreName.name)
	}, [])

	const handleGenre = (e) => {
		// hitta genrenamn
		const genreName = genres.find(g => g.id == e.target.value)
		// sätt page title 
		setPagetitle(genreName.name)
		// sök med vald genre
		setSearchParams({
			page: 1,
			genre: e.target.value,
			sort,
		})
	}

	const handleClickSorting = (e) => {
		// sök med vald sortering
		setSearchParams({
			page: 1,
			genre,
			sort: e.target.value,
		})
	}

	return (
		<Container>
			{/* Sidtitel */}
			<Row>
				<Col className="d-flex justify-content-center py-3">
					<h1>
						{pagetitle}
					</h1>
				</Col>
			</Row>

			<Row>
				{/* Sortering dropdown */}
				<Col className="d-flex justify-content-center py-1">
					<Dropdown className="d-inline mx-2">
						<Dropdown.Toggle
							id="dropdown-autoclose-true"
							variant="outline-primary"
							className="button"
						>Sort by</Dropdown.Toggle>
						<Dropdown.Menu >
							{sorting.map(sort => (
								<Dropdown.Item
									key={sort.id}
									as={Button}
									value={sort.value}
									onClick={handleClickSorting}
								>{sort.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Col>

				{/* Genre dropdown */}
				<Col className="d-flex justify-content-center py-1">
					<Dropdown className="d-inline mx-2">
						<Dropdown.Toggle
							id="dropdown"
							variant="outline-primary"
							className="button"
						>Genre</Dropdown.Toggle>
						<Dropdown.Menu >
							{genres && genres.map(genre => (
								<Dropdown.Item
									key={genre.id}
									as={Button}
									value={genre.id}
									onClick={handleGenre}
								>{genre.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>

			<Row>
				<Col className="d-flex justify-content-center py-3">
					{isError && (<Alert variant="danger">An error occured: {error.message}</Alert>)}
					{isLoading && (<BarLoader size={10} />)}
				</Col>
			</Row>

			{/* visa filmer med den input som ges  */}
			{
				data && (
					<div>
						<Row xs={2} md={2} className="g-4">
							{data.results.map(data => (
								<Col lg={3} md={4} sm={6} key={data.id}>
									<MovieCard data={data} />
								</Col>
							))}
						</Row>

						<Row>
							<Col className="py-4">
								<Pagination
									page={page}
									genre={genre}
									sort={sort}
									totalPages={data.total_pages}
									turnPage={setSearchParams}
								/>
							</Col>
						</Row>
					</div>
				)
			}
		</Container >
	)
}

export default GenrePage