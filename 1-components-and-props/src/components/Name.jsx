import PropTypes from 'prop-types';

function Name(props) {
    return (
        <>
            <p>Name: {props.name}</p>
        </>
    )
}

Name.propTypes = {
    name: PropTypes.string
}

export default Name;