import React from 'react';
import useInventories from '../../hooks/useInventories';
import Banner from '../Banner/Banner';
import HeroArea from '../HeroArea/HeroArea';
import HomeInventories from '../HomeInventories/HomeInventories';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <HeroArea />
            <HomeInventories />
            <Footer />
        </div>
    );
};

export default Home;