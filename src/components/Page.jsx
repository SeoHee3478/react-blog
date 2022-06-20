import React from 'react';

import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';



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