import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';

/**
 * Main App component
 * Composes all sections - follows composition pattern
 */
function App() {
    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <TechStack />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
