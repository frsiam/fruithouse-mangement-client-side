import React from 'react';
import Banner from '../Banner/Banner';
import HeroArea from '../HeroArea/HeroArea';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <HeroArea />
            <Footer />
        </div>
    );
};

export default Home;