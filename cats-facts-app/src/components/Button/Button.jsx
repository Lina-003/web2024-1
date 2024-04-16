import './Button.css'
import PropTypes from 'prop-types'

export const Button = ({ onClick }) => {
    const handleOnClick = () => {
        onClick();
        console.log('New fact here')
    }

    return (
        <button className='codepen-button' onClick={handleOnClick}>
            <span>New Fact</span>
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};