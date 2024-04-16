import PropTypes from 'prop-types';
import React from 'react';
import './Body/Body.css'

export const CatImage = ({ src }) => {
    if (!src) {
        return <div>No image available</div>;
    }

    return (
        <div>
            <img className='container-img' src={src} alt="Cat"/>
        </div>
    );
}

CatImage.propTypes = {
    src: PropTypes.string,
};
