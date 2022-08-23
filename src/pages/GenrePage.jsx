// React & Bootstrap
import { useState, useRef } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams, Link } from 'react-router-dom'
import { Container, Form, Row, Col, Dropdown, Button } from 'react-bootstrap'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services & Utilities
import { discoverMovies } from '../services/TmdbAPI.js'
import { genres } from '../utils/genres.js'
import { sorting } from '../utils/sorting.js'

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		genre: '',
		sort: '',
	})

	const page = searchParams.get('page')
	const genre = searchParams.get('genre')
	const sort = searchParams.get('sort')

	const { data, error, isLoading, isFetching, isError } = useQuery(['discover-movies', page, genre, sort], discoverMovies)

	const handleCheckbox = (e) => {
		setSearchParams({
			page,
			genre: e.target.id,
			sort,
		})
	}

	const handleClickSorting = (e) => {
		setSearchParams({
			page,
			genre,
			sort: e.target.value,
		})
	}

	const handleSubmit = (val) => {
		setSearchParams({
			page,
			genre,
			sort,
		})
	}

	return (
		<Container className="d-flex flex-column align-items-center">

			{/* Sortering */}
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle id="dropdown-autoclose-true">
					Sortering
				</Dropdown.Toggle>

				<Dropdown.Menu >
					{sorting.map(sort => (
						<Dropdown.Item key={sort.id} as={Button} value={sort.value} onClick={handleClickSorting}>{sort.name}</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>


			{/* Genre buttons */}
			<Form>
				<div className="mb-3">
					{genres.map(genre => (
						<Form.Check
							key={genre.id}
							onChange={handleCheckbox}
							inline
							label={genre.name}
							name="genreGroup"
							type="radio"
							id={genre.id}
						/>
					))}
				</div>
			</Form>


			{isLoading && (<ClimbingBoxLoader size={10} />)}

			{/* visa 10-20 filmer med den input som ges  */}
			{
				data && (
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
							genre={genre}
							sort={sort}
							totalPages={data.total_pages}
							turnPage={setSearchParams}
						/>
					</>
				)
			}

		</Container >
	)
}

export default SearchPage