import './ReactSass.sass';
import PropTypes from 'prop-types';

const ReactSass = ({ title, text }) => {
    return (
        <>
            <div className="content">
                <div className="content-title">{title}</div>
                <div className="content-text">{text}</div>
            </div>
        </>
    );
}

ReactSass.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

export default ReactSass;