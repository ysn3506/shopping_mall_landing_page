import React from 'react';
import LoadingSpinner from '../../components/loading-spinner';

function LoadingView() {
    return (
     <div className="loading-view-wrapper">
         <LoadingSpinner/>
    </div>
    );
}

export default LoadingView;