import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FontLoader from './components/FontLoader';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import PostDetailPage from './pages/PostDetailPage';
import AboutPage from './pages/AboutPage';
import NewsletterPage from './pages/NewsletterPage';
import ConsultationPage from './pages/ConsultationPage';
import { initGA, logPageView } from './utils/analytics';

function AppContent() {
  const [currentPost, setCurrentPost] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    logPageView(location.pathname, document.title);
  }, [location]);

  const handleSetPage = (page) => {
    navigate(`/${page === 'home' ? '' : page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "#e8e3d8" }}>
      <FontLoader />
      <Nav setPage={handleSetPage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage setPage={handleSetPage} setCurrentPost={setCurrentPost} />} />
          <Route path="/research" element={<ResearchPage setPage={handleSetPage} setCurrentPost={setCurrentPost} />} />
          <Route path="/blog/:slug" element={<PostDetailPage post={currentPost} setPage={handleSetPage} setCurrentPost={setCurrentPost} />} />
          <Route path="/about" element={<AboutPage setPage={handleSetPage} />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </main>
      <Footer setPage={handleSetPage} />
    </div>
  );
}

export default function App() {
  // Initialize Google Analytics
  // Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
  useEffect(() => {
    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(GA_MEASUREMENT_ID);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
