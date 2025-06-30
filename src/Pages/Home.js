import React from 'react';
import { useTheme } from '../Context/Theme';


import Navbar from '../Components/NavBar';
import Header from '../Components/Header';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    const { isDark } = useTheme();

    return (
        <div className={`min-h-screen ${isDark ? 'dark-gradient-bg text-light' : 'light-gradient-bg text-dark'}`}>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;