import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink('floating-btn')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-ellus-green hover:bg-ellus-green-hover text-neutral-950 px-4 py-3 rounded-full shadow-[0_4px_22px_rgba(150,172,98,0.45)] hover:scale-105 transition-all duration-300 group cursor-pointer border border-ellus-green/60 select-none"
      aria-label="Conversar com a Ellus Academia pelo WhatsApp"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-60"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral-950"></span>
      </span>

      <MessageCircle className="w-5 h-5 fill-current" strokeWidth={1.5} />

      <span className="font-display font-black text-xs uppercase tracking-wider hidden sm:inline-block">
        Falar no WhatsApp
      </span>
    </a>
  );
};
