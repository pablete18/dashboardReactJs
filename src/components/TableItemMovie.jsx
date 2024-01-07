import PropTypes from 'prop-types'

export const TableItemMovie = ({ title, rating, length, genre, awards }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>{genre?.name}</td>
            <td>{awards}</td>
            <td>
                <div className='d-flex gap-2 justify-content-around'>

                    <button className='btn btn-sm btn-primary'>
                        <i className='fas fa-eye'></i>
                    </button>
                    <button className='btn btn-sm btn-success'>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-sm btn-danger'>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItemMovie.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.string,
    awards: PropTypes.number,
    length: PropTypes.number,
    genre: PropTypes.object,
}

TableItemMovie.defaultProps = {
    genres: ["SIN ESPECIFICAR"]
}