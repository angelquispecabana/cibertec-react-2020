import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Product = ({product, index, deleteFn}) => {
    if (!product) {
        return null;
    }

    const handleClick = () => {
        deleteFn(product.id)
    }

    return(
        <tr>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.stock}</td>
            <td>{product.price}</td>
            <td>
                <Link to={`/products/${product.id}`} className='button is-small is-info mr-1'>Editar</Link>
                <button onClick={handleClick} className='button is-small is-danger'>Eliminar</button>
            </td>
        </tr>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
    deleteFn: PropTypes.func.isRequired
}

Product.defaultProps = {
    product: {},
    index: 1
}