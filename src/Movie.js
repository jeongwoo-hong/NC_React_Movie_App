import React from "react";
import PropTypes from "prop-types"

function Movie({id, year, title, summary, poster}) {
    return <h1>{title}</h1>
}

// eslint-disable-next-line react/no-typos
Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,

}

export default Movie