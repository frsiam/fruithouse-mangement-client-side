import React from 'react';
import Banner from '../Banner/Banner';
import HeroArea from '../HeroArea/HeroArea';
import HomeInventories from '../HomeInventories/HomeInventories';
import Information from '../Information/Information';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner />
            <HeroArea />
            <HomeInventories />
            <Information />
            <Team />
        </div>
    );
};

export default Home;