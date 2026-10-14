import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Metodologia } from './components/sections/Metodologia';
import { Diferenciais } from './components/sections/Diferenciais';
import { Objetivos } from './components/sections/Objetivos';
import { Espaco } from './components/sections/Espaco';
import { Contato } from './components/sections/Contato';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';
import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  // Inicializa o smooth scrolling profissional do Lenis
  useLenis();

  return (
    <div className="min-h-screen bg-background-deep text-neutral-100 flex flex-col font-sans selection:bg-ellus-green selection:text-neutral-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Metodologia />
        <Diferenciais />
        <Objetivos />
        <Espaco />
        <Contato />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
