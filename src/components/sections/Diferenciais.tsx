import React from 'react';
import { Users, Activity, Shield, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../../constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Diferenciais: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-background-surface border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-4">
              Diferenciais Reais
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              O que você encontra aqui e não vê em qualquer lugar
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mt-4">
              Não somos uma rede impessoal nem prometemos fórmulas milagrosas. Oferecemos o que realmente funciona: atenção atenta, orientação prática e um ambiente onde todo mundo treina com tranquilidade.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              asLink
              href={getWhatsAppLink('diferenciais')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<MessageCircle className="w-4 h-4" strokeWidth={1.5} />}
            >
              Conversar com a Equipe
            </Button>
          </div>
        </div>

        {/* Asymmetric Bento Grid for Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Bento Card 1: Destaque Principal — Instrutores no Salão (Span 7 Cols) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-lg border border-neutral-800 bg-background-deep p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl text-metallic-600 group-hover:text-ellus-red transition-colors">
                  01
                </span>
                {/* Tempered Glass Badge */}
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded shadow-inner">
                  Presença no Salão
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red shrink-0 mt-1">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                    Instrutores Presentes no Salão
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Aqui você não precisa ficar acenando ou caçando alguém para tirar dúvidas. Nossos professores circulam pelo espaço, observam a postura e orientam suas séries de maneira atenta e natural.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-metric tempered block */}
            <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between bg-neutral-900/40 p-4 rounded border border-neutral-800">
              <span className="text-xs font-display uppercase tracking-wider font-bold text-neutral-300">
                Acompanhamento humano sem aplicativo intermediário
              </span>
              <span className="text-[10px] font-display uppercase font-bold text-ellus-red tracking-widest">
                100% Ativo
              </span>
            </div>
          </div>

          {/* Bento Card 2: Treino no Seu Ritmo (Span 5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-lg border border-neutral-800 bg-background-deep p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl text-metallic-600 group-hover:text-ellus-red transition-colors">
                  02
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded shadow-inner">
                  Adaptação Real
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red shrink-0 mt-1">
                  <Activity className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                    Treinos Adaptados ao Seu Momento
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Seja para dar os primeiros passos na academia, recuperar condicionamento após um período parado ou atingir metas mais específicas, o treino é planejado para o seu corpo e seu ritmo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Respeito ao seu histórico de treino</span>
              <ArrowUpRight className="w-4 h-4 text-ellus-red" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bento Card 3: Ambiente Acolhedor (Span 5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-lg border border-neutral-800 bg-background-deep p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl text-metallic-600 group-hover:text-ellus-red transition-colors">
                  03
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded shadow-inner">
                  Foco &amp; Respeito
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red shrink-0 mt-1">
                  <Shield className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                    Ambiente Focado e Acolhedor
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Sem tumulto, sem clima intimidador e sem filas intermináveis para usar um aparelho. Você chega, treina com concentração e aproveita seu tempo ao máximo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Espaço comunitário e seguro</span>
              <ArrowUpRight className="w-4 h-4 text-ellus-red" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bento Card 4: Localização Prática na Vila Granada (Span 7 Cols) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-lg border border-neutral-800 bg-background-deep p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl text-metallic-600 group-hover:text-ellus-red transition-colors">
                  04
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-neutral-300 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 px-2.5 py-1 rounded shadow-inner">
                  Vila Granada • Mairinque
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-ellus-red shrink-0 mt-1">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                    Fácil Acesso na Vila Granada
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Localização prática em Mairinque, facilitando manter a rotina de treinos antes ou depois do trabalho, sem precisar de grandes deslocamentos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-neutral-400">Rua João Antônio Ramos, 90</span>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-ellus-red hover:underline"
              >
                <span>Ver rota e contato</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
