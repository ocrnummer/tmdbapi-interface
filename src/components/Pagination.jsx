import React from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({ page, totalPages, turnPage, genre, sort }) => {
    return (
        <div className="d-flex justify-content-between align-item-center m-2">
            <Button
                disabled={page <= 1 ? true : false}
                onClick={() => {
                    turnPage({
                        page: Number(page) - 1,
                        genre,
                        sort
                    })
                }}
                variant="primary"
            >Föregående sida</Button>

            <span> {page} / {totalPages} </span>

            <Button
                onClick={() => {
                    turnPage({
                        page: Number(page) + 1,
                        genre,
                        sort
                    })
                }}
                variant="primary"
            >Nästa sida</Button>
        </div>
    )
}

export default Pagination