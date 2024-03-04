import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import React from 'react';


const App = () => {

    React.useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <Header />
                <AboutUs />
                <SpecialMenu />
                <Chef />
                <Intro />
                <Laurels />
                <Gallery />
                <FindUs />
                <Footer />
            </div>
        </>
    )
}

export default App

