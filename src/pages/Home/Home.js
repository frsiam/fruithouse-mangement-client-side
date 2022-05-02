import React from 'react';
import useInventories from '../../hooks/useInventories';
import Banner from '../Banner/Banner';
import HeroArea from '../HeroArea/HeroArea';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    const [inventories] = useInventories();
    return (
        <div>
            <Header />
            <Banner />
            <HeroArea />
            <div>
                <h3>{inventories.length}</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Home;