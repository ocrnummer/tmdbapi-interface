import React from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({ page, previousPage, nextPage }) => {
    return (
        <div className="d-flex justify-content-between align-item-center m-2">
            <Button
                disabled={page <= 1 ? true : false}
                onClick={previousPage}
                variant="primary"
            >Föregående sida</Button>

            <span> {page} / many </span>

            <Button
                onClick={nextPage}
                variant="primary"
            >Nästa sida</Button>
        </div>
    )
}

export default Pagination