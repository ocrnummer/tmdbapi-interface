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
import { searchMovies } from '../services/TmdbAPI.js'
import { useEffect } from 'react';

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		query: ''
	})

	const page = searchParams.get('page')
	const query = searchParams.get('query')

	const { data, error, isLoading, isFetching, isError } = useQuery(['search-movies', page, query], searchMovies)

	return (
		<Container className="d-flex flex-column align-items-center">

			{/* Searchbar */}
			<Form>
				<Form.Control
					placeholder="Seach for movie title"
					onChange={e => {

						console.log(e.target.value)
						setSearchParams({
							page,
							query: e.target.value
						})
					}}
				/>
			</Form>

			{isError && (<p>An error occured: {error}</p>)}

			{isLoading && (<ClimbingBoxLoader size={10} />)}

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
						totalPages={data.total_pages}
						turnPage={setSearchParams}
					/>
				</>
			)}

		</Container >
	)
}

export default SearchPage