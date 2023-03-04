import React from 'react';
import LoginDirector from '../../components/login-director';
import Slider from '../../components/slider';




function Home() {

    
    return (
        <div className='container'>
            <Slider />
            <LoginDirector/>
        </div>
    );
}

export default Home;