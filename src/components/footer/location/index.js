import React from 'react';
import mapIcon from "../../../assets/google-maps.png"
import qrCode from "../../../assets/qr-code.png";

function Location() {
    return (
      <div className='location'>
            <img src={qrCode} alt="multi adress" key={0} className="qr-code" />
            <button><img src={mapIcon} alt="google-map multi"/></button>
      </div>
    );
}

export default Location;