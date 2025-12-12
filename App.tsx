import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Products from './components/Products';
import Footer from './components/Footer';
import Legal from './components/Legal';

function App() {
  return (
    <div className="min-h-screen bg-navy text-limestone">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Products />
        <Legal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
