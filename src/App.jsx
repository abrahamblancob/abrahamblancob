import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/common/SmoothScroll';
import CustomCursor from './components/common/CustomCursor';
import Preloader from './components/common/Preloader';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GsapDemoPage from './pages/GsapDemoPage';

function App() {
    const [preloaderDone, setPreloaderDone] = useState(false);

    return (
        <>
            <Preloader onComplete={() => setPreloaderDone(true)} />
            <CustomCursor />
            <SmoothScroll>
                <div className={`min-h-screen bg-slate-900 ${preloaderDone ? '' : 'overflow-hidden h-screen'}`}>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/blog/:slug" element={<BlogPostPage />} />
                            <Route path="/gsap-demo" element={<GsapDemoPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </>
    );
}

export default App;
