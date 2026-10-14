import React from 'react';
import { Dumbbell, Users, Activity, MapPin, Calendar, Check, ArrowUpRight } from 'lucide-react';
import { GYM_DATA, EQUIPMENT_CHECKLIST, getWhatsAppLink } from '../../constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SpaceCarousel } from '../ui/SpaceCarousel';
import gymPhotoSrc from '../../assets/img/academia.jpg';

export const Espaco: React.FC = () => {
  return (
    <section id="espaco" className="py-24 sm:py-32 bg-background-deep border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-4">
              Estrutura &amp; Espaço Físico
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              O Salão da Ellus em Detalhes
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mt-4">
              Sem estéticas artificiais. Um espaço de musculação de verdade na Vila Granada, equipado para quem busca treino consistente com pesos livres e máquinas articuladas.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              asLink
              href={getWhatsAppLink('visita')}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-red"
              size="md"
              icon={<Calendar className="w-4 h-4" strokeWidth={1.5} />}
            >
              Agendar Visita Presencial
            </Button>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-16">
          {/* Bento Card 1: Destaque Principal com Foto Real do Salão (Span 8 Cols) */}
          <div className="md:col-span-12 lg:col-span-8 group relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/40 min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 transition-colors hover:border-neutral-700">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={gymPhotoSrc}
                alt="Salão de musculação da Ellus Academia com equipamentos de pesos livres na Vila Granada"
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width={474}
                height={429}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background-deep/80 via-transparent to-transparent" />
            </div>

            {/* Top Glass Badge */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 bg-neutral-950/70 text-neutral-200 border border-neutral-700/60 backdrop-blur-md px-3 py-1 rounded text-xs font-display font-bold uppercase tracking-wider shadow-inner">
                <span className="w-2 h-2 rounded-full bg-ellus-red" />
                Fotografia Real do Salão
              </span>
              <span className="hidden sm:inline-block font-display text-xs font-semibold uppercase tracking-widest text-neutral-400 bg-neutral-900/60 backdrop-blur-sm px-2.5 py-1 rounded border border-neutral-800">
                Vila Granada • Mairinque
              </span>
            </div>

            {/* Bottom Content on Card */}
            <div className="relative z-10 max-w-xl mt-32">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-ellus-red block mb-1">
                Espaço Completo de Treinamento
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                Área de Pesos Livres &amp; Máquinas Reguláveis
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Salão com piso emborrachado anti-impacto, halteres em diversas graduações e aparelhos projetados para segurança biomecânica articular.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Métrica — Acompanhamento no Salão (Span 4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-lg border border-neutral-800 bg-background-surface p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded">
                  Atenção Ativa
                </span>
              </div>

              <div className="mb-2">
                <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                  100%
                </span>
                <span className="text-xs font-display uppercase tracking-widest text-ellus-red font-bold block mt-0.5">
                  Acompanhamento no Salão
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-3">
                Professores presentes no piso da academia para orientar cada movimento e ajustar as cargas sem você precisar pedir ajuda.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Orientação presencial contínua</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ellus-red" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bento Card 3: Métrica — Sem Lotação & Fluidez (Span 4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-lg border border-neutral-800 bg-background-surface p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red">
                  <Activity className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded">
                  Fluxo Livre
                </span>
              </div>

              <div className="mb-2">
                <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Zero Filas
                </span>
                <span className="text-xs font-display uppercase tracking-widest text-ellus-red font-bold block mt-0.5">
                  Sem Lotação Abusiva
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-3">
                Número de alunos planejado para você não perder tempo esperando para revezar equipamentos. Treino focado e sem estresse.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Ambiente calmo e produtivo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ellus-red" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bento Card 4: Equipamentos & Biomecânica Checklist (Span 5 Cols) */}
          <div className="md:col-span-6 lg:col-span-5 rounded-lg border border-neutral-800 bg-background-surface p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red">
                  <Dumbbell className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded">
                  Biomecânica e Postura
                </span>
              </div>

              <h4 className="font-display text-lg font-bold uppercase text-white tracking-tight mb-2">
                Equipamentos Essenciais de Musculação
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Configurados para garantir estabilidade articular e isolamento muscular preciso.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0 m-0">
                {EQUIPMENT_CHECKLIST.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-ellus-red shrink-0" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-6 border-t border-neutral-800/80 text-[11px] font-display uppercase tracking-wider text-neutral-500">
              Aparelhos revisados e higienizados
            </div>
          </div>

          {/* Bento Card 5: Visita Presencial & Localização (Span 3 Cols) */}
          <div className="md:col-span-6 lg:col-span-3 rounded-lg border border-neutral-800 bg-background-surface p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded">
                  Portas Abertas
                </span>
              </div>

              <h4 className="font-display text-lg font-bold uppercase text-white tracking-tight mb-2">
                Conheça de Perto
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {GYM_DATA.address.street} — {GYM_DATA.address.neighborhood}, {GYM_DATA.address.city}.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Button
                asLink
                href="#contato"
                variant="secondary"
                size="sm"
                className="w-full text-xs"
                icon={<MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />}
              >
                Ver no Mapa
              </Button>
            </div>
          </div>
        </div>

        {/* Embla Carousel Tour do Espaço Físico */}
        <div className="pt-8 border-t border-neutral-800">
          <SpaceCarousel />
        </div>
      </div>
    </section>
  );
};
