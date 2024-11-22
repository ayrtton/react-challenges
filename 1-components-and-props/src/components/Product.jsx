import PropTypes from 'prop-types';

function Product(props) {
    return (
        <>
            <p>Title: {props.title}</p>
            <p>Price: ${props.price}</p>
            <p>On Sale: {props.onSale ? 'Yes' : 'No'}</p>
            <br/>
        </>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    onSale: PropTypes.bool
}

export default Product;