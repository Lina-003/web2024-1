import PropTypes from 'prop-types';
import React from 'react';

export const CatImage = ({ src }) => {
    return (
        <div className='container-img'>
            <img src={src}></img>
        </div>

    )
}
