import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Contact from '../components/sections/Contact';

/**
 * Landing page - Main page with all original sections
 */
const LandingPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Contact />
        </>
    );
};

export default LandingPage;
