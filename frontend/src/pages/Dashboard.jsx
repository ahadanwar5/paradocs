import React from 'react';
import MyCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PanelDisplay from '../components/PanelDisplay';
import ProductsHome from '../components/ProductsHome';
import TrustDisplay from '../components/TrustDisplay';
import PartnersDisplay from '../components/PartnersDisplay';
import Banner from '../components/Banner';
import Footnotes from '../components/Footnotes';
import TileDisplay from '../components/TileDisplay';
import MapComponent from '../components/MapComponent';
import Dashboard from '../dasboard/Dashboard';

function Home() {
    return (
        <div>
            <Navbar/>
            <Dashboard/>
            <Footer/>
        </div>
    );
}

export default Home;