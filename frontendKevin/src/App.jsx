import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import XerisCoin from './pages/XerisCoin';
import Contact from './pages/Contact';
import DesignSystem from './pages/DesignSystem';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/xeriscoin" element={<XerisCoin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/data" element={<Placeholder title="Network Intelligence" />} />
          <Route path="/testnet-beta" element={<Placeholder title="Testnet Registration" />} />
          <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

const Placeholder = ({ title }) => (
  <section className="container mx-auto px-6 py-40 text-center">
    <h1 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-widest">{title}</h1>
    <p className="text-[#64748b] mb-12">Strategic protocol module currently initializing.</p>
    <div className="w-16 h-1 bg-[#0019A5] mx-auto animate-pulse"></div>
  </section>
);

export default App;
