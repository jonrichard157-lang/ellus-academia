import React from 'react';
import { GOALS_LIST } from '../../constants';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export const Objetivos: React.FC = () => {
  return (
    <section id="objetivos" className="py-20 sm:py-32 bg-background-deep border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            Objetivos de Treino
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
            Qual é o seu foco para começar hoje?
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            A musculação é a ferramenta mais versátil da saúde física. Veja como podemos direcionar seu treinamento na Ellus:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOALS_LIST.map((goal, idx) => (
            <Card key={idx} className="flex flex-col justify-between group">
              <div>
                <div className="w-8 h-0.5 bg-neutral-800 group-hover:bg-ellus-red transition-colors mb-6 rounded" />
                <h3 className="text-xl font-bold uppercase text-white mb-3 group-hover:text-ellus-red transition-colors">
                  {goal.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/80 font-display text-xs font-bold uppercase tracking-wider text-ellus-red">
                {goal.tag}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
