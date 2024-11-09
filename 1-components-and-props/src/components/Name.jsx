import PropTypes from 'prop-types';

function Name(props) {
    return (
        <>
            <h2>2 - Using Props</h2>
            <p>Name: {props.name}</p>
        </>
    )
}

Name.propTypes = {
    name: PropTypes.string
}

export default Name;