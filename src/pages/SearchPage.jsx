// React & Bootstrap
import { useState, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { Container, Form, Row, Col, Alert } from 'react-bootstrap'
import BarLoader from "react-spinners/BarLoader";


// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services & Utilities
import { searchMovies } from '../services/TmdbAPI.js'

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		query: ''
	})

	const page = searchParams.get('page')
	const query = searchParams.get('query')

	const { data, error, isLoading, isError } = useQuery(['search-movies', page, query], searchMovies)

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

			{isError && (<Alert variant="warning">An error occured: {error.message}</Alert>)}

			{isLoading && (<BarLoader size={10} />)}

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