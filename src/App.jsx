import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import React from 'react';


const App = () => {

    React.useEffect(() => {
        AOS.init({});
    }, []);


    return (
        <>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </>
    )
}

export default App
