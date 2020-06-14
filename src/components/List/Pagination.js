import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    const {pages,totalPages,handleClick} = props;
    return(
        <div className="Pagination">
            <button className="Pagination-button"
            onClick={handleClick.bind(this, 'prev') }
            disabled={pages <= 1}>
                &larr;
            </button>
            <span className="Pagination-info">
                page <b>{pages}</b> of <b>{totalPages}</b>
            </span>
            <button className="Pagination-button"
            onClick={handleClick.bind(this, 'next')}
            disabled={pages >= totalPages}>
                &rarr;
            </button>


        </div>
    )
}

export default Pagination