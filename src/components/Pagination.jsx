// React & bootstrap
import React from 'react'
import Button from 'react-bootstrap/Button'

// Assets
import '../assets/scss/App.scss'

const Pagination = ({ page, totalPages, turnPage, genre, category, sort }) => {
	return (
		<div className="d-flex justify-content-between align-item-center m-2">
			<Button
				disabled={page <= 1 ? true : false}
				onClick={() => {
					turnPage({
						page: Number(page) - 1,
						genre,
						category,
						sort
					})
				}}
				variant="outline-primary"
				className="button"
			>Previous</Button>

			<span> {page} / {totalPages} </span>

			<Button
				onClick={() => {
					turnPage({
						page: Number(page) + 1,
						genre,
						category,
						sort
					})
				}}
				variant="outline-primary"
				className="button"
			>Next</Button>
		</div>
	)
}

export default Pagination