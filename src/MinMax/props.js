import PropTypes, { number } from 'prop-types';
export default {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    setCnt: PropTypes.func.isRequired,
};
