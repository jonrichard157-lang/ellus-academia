import React, { useState } from 'react';
import { MapPin, MessageCircle, Clock, Copy, Check, Navigation } from 'lucide-react';
import { InstagramIcon } from '../ui/InstagramIcon';
import { GYM_DATA, getWhatsAppLink } from '../../constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Contato: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(GYM_DATA.address.full).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-32 bg-background-deep border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Info Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Badge variant="accent" className="w-fit">
              Localização &amp; Contato
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Estamos esperando por você na Vila Granada.
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Fácil de chegar e com atendimento direto pelo WhatsApp. Venha conhecer a academia, conversar sobre seus objetivos e tirar qualquer dúvida com a equipe.
            </p>

            {/* Contact Items List */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="p-4 rounded-lg bg-background-surface border border-neutral-800 flex items-start gap-4 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-ellus-red" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <strong className="block font-display text-xs uppercase font-bold tracking-wider text-ellus-red mb-1">
                    Endereço Completo
                  </strong>
                  <p className="text-sm text-neutral-200">
                    {GYM_DATA.address.full}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-lg bg-background-surface border border-neutral-800 flex items-start gap-4 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-ellus-red" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <strong className="block font-display text-xs uppercase font-bold tracking-wider text-ellus-red mb-1">
                    WhatsApp Oficial
                  </strong>
                  <a
                    href={getWhatsAppLink('contato-link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-200 hover:text-ellus-red transition-colors font-medium"
                  >
                    {GYM_DATA.whatsappFormatted}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-4 rounded-lg bg-background-surface border border-neutral-800 flex items-start gap-4 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5 text-ellus-red" />
                </div>
                <div className="flex-1">
                  <strong className="block font-display text-xs uppercase font-bold tracking-wider text-ellus-red mb-1">
                    Instagram
                  </strong>
                  <a
                    href={GYM_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-200 hover:text-ellus-red transition-colors font-medium"
                  >
                    {GYM_DATA.instagram}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="p-4 rounded-lg bg-background-surface border border-neutral-800 flex items-start gap-4 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-ellus-red" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <strong className="block font-display text-xs uppercase font-bold tracking-wider text-ellus-red mb-1">
                    Horário de Funcionamento
                  </strong>
                  <p className="text-sm text-neutral-200">
                    {GYM_DATA.hours.weekdays}
                  </p>
                  <span className="text-xs text-neutral-500">
                    {GYM_DATA.hours.weekendNote}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asLink
                href={GYM_DATA.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<Navigation className="w-4 h-4" strokeWidth={1.5} />}
              >
                Como Chegar (Google Maps)
              </Button>

              <Button
                type="button"
                onClick={handleCopyAddress}
                variant="secondary"
                size="md"
                icon={copied ? <Check className="w-4 h-4 text-emerald-400" strokeWidth={1.5} /> : <Copy className="w-4 h-4" strokeWidth={1.5} />}
              >
                {copied ? 'Endereço Copiado!' : 'Copiar Endereço'}
              </Button>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 h-full min-h-[420px] flex flex-col">
            <div className="bg-background-surface border border-neutral-800 rounded-xl overflow-hidden flex flex-col flex-1 shadow-2xl">
              <div className="p-4 bg-background-elevated border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                    Vila Granada • Mairinque - SP
                  </span>
                </div>
                <span className="text-[11px] font-display uppercase tracking-widest text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  Google Maps
                </span>
              </div>

              <div className="relative flex-1 w-full min-h-[360px] bg-neutral-900">
                <iframe
                  title="Localização da Ellus Academia na Vila Granada, Mairinque - SP"
                  src={GYM_DATA.maps.embedUrl}
                  className="w-full h-full min-h-[360px] border-0 filter invert-[0.88] hue-rotate-180 contrast-[0.92]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
