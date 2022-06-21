import React from 'react';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './Button.css';
import './Global.css';
import './Profile.css';



const Page = () => {

    return (
        <div className="page">
            <Header />
            <Banner />
            <Main />
            <Footer />
        </div>
    );
};

export default Page;