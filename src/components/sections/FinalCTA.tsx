import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background-deep via-background-surface to-background-deep border-b border-neutral-800 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-ellus-green/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="accent" className="mb-6">
          Comece a Evoluir
        </Badge>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-6">
          Chegou a hora de treinar com orientação de verdade.
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Dê o primeiro passo para cuidar do seu corpo e da sua mente. Mande uma mensagem pelo WhatsApp da Ellus Academia e descubra como iniciar seus treinos.
        </p>

        <Button
          asLink
          href={getWhatsAppLink('final-cta')}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="lg"
          className="text-base sm:text-lg px-10 py-4"
          icon={<MessageCircle className="w-5 h-5" strokeWidth={1.5} />}
        >
          Falar com a Ellus no WhatsApp
        </Button>
      </div>
    </section>
  );
};
