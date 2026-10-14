import React from 'react';
import { GYM_DATA, NAV_LINKS, getWhatsAppLink } from '../../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-surface border-t border-neutral-800 pt-16 sm:pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-3 select-none group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-950 to-black border-2 border-ellus-green flex items-center justify-center font-display font-black text-sm text-ellus-green shadow-[0_0_12px_rgba(150,172,98,0.25)] group-hover:scale-105 transition-transform">
                EL
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider uppercase text-white group-hover:text-ellus-green transition-colors">
                  {GYM_DATA.name}
                </span>
                <span className="font-display text-[10px] font-bold tracking-[0.16em] uppercase text-ellus-green">
                  Saúde &amp; Reabilitação
                </span>
              </div>
            </a>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mt-2">
              {GYM_DATA.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Social */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Contato &amp; Local
            </h4>
            <p className="text-sm text-neutral-200">
              {GYM_DATA.address.street}
            </p>
            <p className="text-sm text-neutral-400">
              {GYM_DATA.address.neighborhood}, {GYM_DATA.address.city} - {GYM_DATA.address.state}
            </p>
            <p className="text-sm text-neutral-400">
              CEP {GYM_DATA.address.zipCode}
            </p>
            <div className="pt-2 flex flex-col gap-1.5">
              <a
                href={getWhatsAppLink('default')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ellus-green hover:underline"
              >
                {GYM_DATA.whatsappFormatted}
              </a>
              <a
                href={GYM_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                {GYM_DATA.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {currentYear} {GYM_DATA.name}. Todos os direitos reservados.</p>
          <p>{GYM_DATA.address.neighborhood}, {GYM_DATA.address.city} - {GYM_DATA.address.state} • Musculação &amp; Acompanhamento</p>
        </div>
      </div>
    </footer>
  );
};
