import PropTypes from 'prop-types';
import React from 'react';

export const CatImage = ({ src }) => {
    if (!src) {
        return <div>No image available</div>;
    }

    return (
        <div className='container-img'>
            <img src={src} alt="Cat"/>
        </div>
    );
}

CatImage.propTypes = {
    src: PropTypes.string,
};
