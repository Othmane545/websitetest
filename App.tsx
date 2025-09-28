import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-green-100">
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;