import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';

/**
 * Main App component
 * Handles routing and layout composition
 */
function App() {
    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
