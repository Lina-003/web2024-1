import './Button.css'
import PropTypes from 'prop-types'

export const Button = ({ onClick }) => {
    
    const handleOnClick = () => {
        onClick();
        console.log('New fact here')
    }

    return (
        <button onClick={handleOnClick}>
            <label>New Fact</label>
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};