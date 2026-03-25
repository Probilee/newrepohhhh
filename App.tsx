import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academy from './components/Academy';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-noise"></div> {/* Global Texture Overlay */}
        <ScrollToTop />
        <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0A0A0A] text-noble-black dark:text-[#F3F4F6] selection:bg-noble-gold/30 flex flex-col relative transition-colors duration-500">
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/admissions" element={<Admissions />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;