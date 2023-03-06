import React from 'react';
import FeatureGrid from '../../components/feature-screen';
import Footer from '../../components/footer';
// import LoginDirector from '../../components/login-director';
import ScrollDownButton from '../../components/scroll-down-icon';
import Slider from '../../components/slider';
import Testimonials from '../../components/testimonials';





function Home() {

    
    return (
      <div className="container home">
        <Slider />
        <ScrollDownButton />
            <FeatureGrid />
            <Testimonials/>
        <Footer />
      </div>
    );
}

export default Home;