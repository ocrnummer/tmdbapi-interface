// React & Bootstrap
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { Container, Form, Row, Col } from 'react-bootstrap'

// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services
import { discoverMovies } from '../services/TmdbAPI.js'

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		genre: 28,
		sort: 'popularity.desc'
		// query: ''
	})

	const page = searchParams.get('page')
	const genre = searchParams.get('genre')
	const sort = searchParams.get('sort')
	const query = searchParams.get('query')

	const { data, error, isLoading, isFetching, isError } = useQuery(['discover-movies', page, genre, sort, query], discoverMovies)

	const sortingOptions = {
		popularityDesc: 'popularity.desc',
		popularityAsc: 'popularity.asc',
		releaseDateDesc: 'primary_release_date.desc',
		releaseDateAsc: 'primary_release_date.asc',
		titleDesc: 'original_title.desc',
		titleAsc: 'original_title.asc',
	}

	const genreOptions = [
		{
			"id": 28,
			"name": "Action"
		},
		{
			"id": 12,
			"name": "Äventyr"
		},
		{
			"id": 16,
			"name": "Animerat"
		},
		{
			"id": 35,
			"name": "Komedi"
		},
		{
			"id": 80,
			"name": "Brott"
		},
		{
			"id": 99,
			"name": "Dokumentär"
		},
		{
			"id": 18,
			"name": "Drama"
		},
		{
			"id": 10751,
			"name": "Familj"
		},
		{
			"id": 14,
			"name": "Fantasy"
		},
		{
			"id": 36,
			"name": "Historia"
		},
		{
			"id": 27,
			"name": "Skräck"
		},
		{
			"id": 10402,
			"name": "Musikal"
		},
		{
			"id": 9648,
			"name": "Mysterier"
		},
		{
			"id": 10749,
			"name": "Romantik"
		},
		{
			"id": 878,
			"name": "Science Fiction"
		},
		{
			"id": 10770,
			"name": "Film adaptioner"
		},
		{
			"id": 53,
			"name": "Spänning"
		},
		{
			"id": 10752,
			"name": "Krig"
		},
		{
			"id": 37,
			"name": "Vilda västern"
		}
	]

	// const [searchInput, setSearchInput] = useState('')

	// useEffect(() => {
	// 	setSearchParams({
	// 		page,
	// 		genre,
	// 		sort,
	// 		query: searchInput
	// 	})
	// }, [searchInput])

	// const handleSubmit = () => {

	// }

	return (
		<Container className="d-flex flex-column align-items-center">
			{/* form med input för text och knappar/dropdown för genre */}
			{/* <Form onSubmit={handleSubmit}>
				<Form.Group className="d-flex align-items-center m-3">
					<Form.Label>Sök film</Form.Label>
					<Form.Control
						type="text"
						placeholder="Sök film lol"
						onChange={e => setSearchInput(e.target.value)}
						value={searchInput}
					/>
				</Form.Group>
			</Form> */}

			{/* visa 10-20 filmer med den input som ges  */}

			{data && (
				<>
					<Row>
						{data.results.map(data => (
							<Col lg={3} md={4} sm={6} key={data.id}>
								<MovieCard data={data} />
							</Col>
						))}
					</Row>

					<Pagination
						page={page}
						turnPage={setSearchParams}
					/>
				</>
			)}

		</Container>
	)
}

export default SearchPage