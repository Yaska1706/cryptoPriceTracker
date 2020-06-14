import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    return(
        <div className="Pagination">
            <button className="Pagination-button">
                &larr;
            </button>
            <span className="Pagination-info">
                page <b>{props.pages}</b> of <b>{props.totalPages}</b>
            </span>
            <button className="Pagination-button">
                &rarr;
            </button>


        </div>
    )
}

export default Pagination