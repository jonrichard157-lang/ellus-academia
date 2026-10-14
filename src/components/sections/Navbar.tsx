import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, GYM_DATA, getWhatsAppLink } from '../../constants';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-deep/95 backdrop-blur-md border-b border-neutral-800 shadow-lg'
          : 'bg-background-deep/80 backdrop-blur-sm border-b border-neutral-850'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Oficial Ellus */}
        <a href="#inicio" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-950 to-black border-2 border-ellus-green flex items-center justify-center font-display font-black text-lg text-ellus-green shadow-[0_0_15px_rgba(150,172,98,0.25)] group-hover:scale-105 transition-transform">
            EL
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-wider uppercase text-white group-hover:text-ellus-green transition-colors">
              {GYM_DATA.shortName}
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.16em] uppercase text-ellus-green">
              Saúde &amp; Reabilitação
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ellus-green after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            asLink
            href={getWhatsAppLink('header')}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="primary"
            icon={<MessageCircle className="w-4 h-4" strokeWidth={1.5} />}
          >
            Quero Treinar
          </Button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded border border-neutral-800 bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6 text-ellus-green" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background-deep/98 backdrop-blur-xl border-b border-neutral-800 p-6 flex flex-col justify-between transition-all duration-300 z-40 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-2xl uppercase tracking-wider text-neutral-200 hover:text-ellus-red transition-colors block py-2 border-b border-neutral-800/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
          <Button
            asLink
            href={getWhatsAppLink('mobile-drawer')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="w-full"
            icon={<MessageCircle className="w-5 h-5" strokeWidth={1.5} />}
          >
            Falar no WhatsApp
          </Button>
          <p className="text-center text-xs text-neutral-400 font-display uppercase tracking-widest">
            {GYM_DATA.address.neighborhood} • {GYM_DATA.address.city} - {GYM_DATA.address.state}
          </p>
        </div>
      </div>
    </header>
  );
};
