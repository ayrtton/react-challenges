import PropTypes from 'prop-types';

const TernaryRendering = ({ condition }) => {
    return (
        <>
            <p>The value is { condition ? "True" : "False" }.</p>
        </>
    );
}

TernaryRendering.propTypes = {
    condition: PropTypes.bool
};

export default TernaryRendering;