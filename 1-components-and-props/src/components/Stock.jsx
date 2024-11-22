import PropTypes from 'prop-types'
import Product from './Product';

function Stock(props) {
    return(
        <>
            {props.products.map((product) => (
                <Product 
                    key={product.id} 
                    title={product.title} 
                    price={product.price}
                    onSale={product.onSale} 
                />
            ))}
        </>
    );
}

Stock.propTypes = {
    products: PropTypes.array
}

export default Stock;