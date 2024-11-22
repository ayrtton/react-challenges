
import { Component } from "react";
import PropTypes from "prop-types";

class ProductClass extends Component {
    render() {
        const {title, price, onSale} = this.props;

        return (
            <>
                <p>Title: {title}</p>
                <p>Price: ${price}</p>
                <p>On Sale: {onSale ? 'Yes' : 'No'}</p>
            </>
        )
    }
}

ProductClass.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    onSale: PropTypes.bool
}

export default ProductClass;