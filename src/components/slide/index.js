import React from 'react';
import PropTypes from "prop-types";


function SliderSlide({ content }) {
    const { url, motto , alt} = content;
    
    const slideContent = () => <div className='slide-content'>

        <h1>{motto}</h1>

    </div>

    return (
        <div className="slider-slide">
            <img src={`${url}`} alt={`${alt}`} className="slide-image"/>
        <div className='slide-filter'>{slideContent()}</div>
      </div>
    );
}

SliderSlide.propTypes = {
    content: PropTypes.object
}

SliderSlide.defaultProps = {
    content:{motto:"", url:"", alt:""}
}

export default SliderSlide;