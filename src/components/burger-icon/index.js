import React from 'react';
import PropTypes from "prop-types";


function Burger({status, toggling}) {
    return (
      <div id="nav-icon" className={`${status && 'open'}`} onClick={toggling}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
}


Burger.propTypes = {
    status: PropTypes.bool,
    toggling:PropTypes.func.isRequired
};

Burger.defaultProps = {
    status: false
};


export default Burger;