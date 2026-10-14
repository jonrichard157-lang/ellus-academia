import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Play, Pause, ArrowRight, MessageCircle } from 'lucide-react';
import { GYM_DATA, HERO_FEATURES, getWhatsAppLink } from '../../constants';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import heroVideoSrc from '../../assets/video/treino-peck-deck.mp4';
import heroPosterSrc from '../../assets/img/academia.jpg';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 800], [1, shouldReduceMotion ? 1 : 1.08]);
  const videoY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 120]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, shouldReduceMotion ? 1 : 0.4]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: custom * 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 sm:pb-24 overflow-hidden bg-background-deep border-b border-neutral-800"
      aria-label="Apresentação da Ellus Academia"
    >
      {/* Background Video with subtle Scroll Parallax */}
      <motion.div
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPosterSrc}
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.18]"
          aria-label="Vídeo de biomecânica muscular mostrando execução de musculação"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        {/* Dual Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/65 to-background-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(150,172,98,0.12)_0%,transparent_60%)]" />
      </motion.div>

      {/* Video Control Toggle */}
      <button
        type="button"
        onClick={toggleVideo}
        className="absolute top-24 right-4 sm:right-8 z-20 inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 hover:border-ellus-green px-3 py-1.5 rounded text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
        aria-label={isPlaying ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo'}
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 text-ellus-green" strokeWidth={1.5} />
            <span>Pausar vídeo</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 text-ellus-green" strokeWidth={1.5} />
            <span>Reproduzir vídeo</span>
          </>
        )}
      </button>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl">
          {/* Status Badge Animado de Agência */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Badge variant="live-green" hasPulse>
              Academia Aberta / Funcionando agora
            </Badge>
            <span className="font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
              {GYM_DATA.address.neighborhood} • {GYM_DATA.address.city} - {GYM_DATA.address.state}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.92] tracking-tight mb-6"
          >
            Treino sério.<br />
            Orientação real.<br />
            <span className="text-ellus-green">
              No seu ritmo.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUpVariants}
            className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            Na Vila Granada, a Ellus é o espaço de musculação para quem busca evolução consistente, correção atenta da postura e acompanhamento de perto — sem superlotação e sem você ficar perdido.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              asLink
              href={getWhatsAppLink('hero-primary')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" strokeWidth={1.5} />}
            >
              Falar no WhatsApp
            </Button>
            <Button
              asLink
              href="#academia"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" strokeWidth={1.5} />}
            >
              Conhecer a Academia
            </Button>
          </motion.div>
        </div>

        {/* Features Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={4}
          variants={fadeUpVariants}
          className="mt-16 sm:mt-24 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {HERO_FEATURES.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-l-2 border-neutral-800 hover:border-ellus-green pl-4 transition-colors">
              <span className="font-display text-base font-bold uppercase tracking-wider text-white">
                {item.label}
              </span>
              <span className="text-xs text-neutral-400 leading-relaxed">
                {item.description}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
