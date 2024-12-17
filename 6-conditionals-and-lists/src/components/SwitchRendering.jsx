import PropTypes from 'prop-types';

const SwitchRendering = ({ value }) => {
    let result; 

    switch(value) {
        case 1:
            result = <span>one</span>;
            break;
        
        case 2:
            result = <span>two</span>;
            break;
        
        case 3:
            result = <span>three</span>;
            break;
        
        default:
            result = <span>another number</span>;
            break;
    }

    return (
        <>
           <p>The value is {result}.</p>
        </>
    );
}

SwitchRendering.propTypes = {
    value: PropTypes.number
};

export default SwitchRendering;