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

function Home() {
    return (
        <div>
            <Navbar/>
            <MyCarousel/>
            <ProductsHome/>
            <Banner/>
            <PanelDisplay/>
            <TileDisplay/>
            <TrustDisplay/>
            <PartnersDisplay/>
            <div class="container">
            <MapComponent/>
            </div>
            <Footnotes/>
            <Footer/>
        </div>
    );
}

export default Home;