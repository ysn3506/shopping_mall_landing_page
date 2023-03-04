import React from 'react';
import LoginDirector from '../../components/login-director';
import ScrollDownButton from '../../components/scroll-down-icon';
import Slider from '../../components/slider';




function Home() {

    
    return (
        <div className='container'>
            <Slider />
            <LoginDirector />
            <ScrollDownButton/>
        </div>
    );
}

export default Home;