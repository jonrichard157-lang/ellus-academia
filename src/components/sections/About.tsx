import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Users } from 'lucide-react';
import { Badge } from '../ui/Badge';
import gymPhotoSrc from '../../assets/img/academia.jpg';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="academia" className="py-20 sm:py-32 bg-background-surface border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <Badge variant="neutral" className="w-fit">
              A Identidade da Ellus
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Chega de academias onde você treina sozinho com um aplicativo.
            </h2>

            <p className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed">
              Nas grandes franquias, é comum receber uma ficha padrão numa tela de celular e ter que disputar aparelhos sem ninguém para checar se a sua postura está correta.
            </p>

            <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
              <p>
                Na <strong className="text-white">Ellus Academia</strong>, a musculação é feita com atenção humana. Nosso time está presente no salão da Vila Granada para ajustar a altura dos bancos, ensinar a pegada certa e acompanhar sua evolução diária com respeito ao seu ritmo.
              </p>
              <p>
                Não importa se este é o seu primeiro dia de treino ou se você já treina há anos: aqui você encontra um ambiente focado, acolhedor e seguro para transformar atividade física em hábito constante.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800">
              <div className="p-4 rounded-lg bg-background-deep border border-neutral-800 flex items-start gap-3">
                <Users className="w-6 h-6 text-ellus-green shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <strong className="block font-display font-bold uppercase text-white text-sm">
                    Atenção Humana
                  </strong>
                  <span className="text-xs text-neutral-400 leading-normal">
                    Profissionais disponíveis no salão sem você precisar caçar ninguém.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background-deep border border-neutral-800 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-ellus-green shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <strong className="block font-display font-bold uppercase text-white text-sm">
                    Treino Seguro
                  </strong>
                  <span className="text-xs text-neutral-400 leading-normal">
                    Cargas e movimentos ajustados ao seu histórico e mobilidade.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group">
              <img
                src={gymPhotoSrc}
                alt="Salão de musculação da Ellus Academia com equipamentos de pesos livres e anilhas na Vila Granada em Mairinque"
                className="w-full aspect-[4/3.8] object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                width={474}
                height={429}
              />
              <div className="p-4 bg-background-elevated border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-300">
                  Salão de musculação da Ellus Academia
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-widest text-ellus-green bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-0.5 rounded">
                  Vila Granada
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
