import PropTypes from 'prop-types';

function Product(props) {
    return (
        <>
            <h2>3 - Multiple Props</h2>
            <p>Title: {props.title}</p>
            <p>Price: {props.price}</p>
            <p>On Sale: {props.onSale ? 'Yes' : 'No'}</p>
        </>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    onSale: PropTypes.bool
}

export default Product;