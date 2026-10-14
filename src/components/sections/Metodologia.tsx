import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { BIOMECHANICS_CARDS } from '../../constants';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export const Metodologia: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="metodologia" className="py-20 sm:py-32 bg-background-deep border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-3xl mb-16"
        >
          <Badge variant="accent" className="mb-4">
            Metodologia &amp; Ciência do Movimento
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
            Cada repetição conta quando a técnica está certa.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Treinar musculação não é empurrar peso de qualquer jeito. É entender qual grupo muscular está sendo estimulado, manter a postura firme e progredir com segurança sem agredir articulações.
          </p>
        </motion.div>

        {/* Staggered Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {BIOMECHANICS_CARDS.map((card) => (
            <motion.div key={card.number} variants={cardVariants} className="h-full">
              <Card className="flex flex-col justify-between h-full group">
                <div>
                  <span className="font-display font-black text-3xl text-ellus-green block mb-4 group-hover:scale-105 transition-transform origin-left">
                    {card.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 font-display text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-ellus-green transition-colors">
                  {card.tag}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
