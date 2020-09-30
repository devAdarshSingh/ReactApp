import React from 'react';
import '../../App.css';
import Header from './Header.component'
import About from './About.section'
import Services from './Services'
import FAQs from './FAQs'
import OurTeam from './OurTEam'
import Careers from './Careers';
import Footer from '../layout/Footer'


function LandingPage() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <FAQs />
            <OurTeam />
            <Careers />
            <Footer />
        </>
    );
}

export default LandingPage;
