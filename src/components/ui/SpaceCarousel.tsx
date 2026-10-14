import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import gymPhotoSrc from '../../assets/img/academia.jpg';

export interface SpaceSlide {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
}

export const SPACE_SLIDES: SpaceSlide[] = [
  {
    id: 'pesos-livres',
    title: 'Área de Musculação & Pesos Livres',
    category: 'Pesos Livres',
    tag: 'Halteres & Barras Maciças',
    description:
      'Espaço equipado com piso emborrachado anti-impacto de alta densidade, halteres em diversas graduações e bancos reguláveis para treinamento de força com máxima estabilidade.',
    image: gymPhotoSrc,
  },
  {
    id: 'maquinas',
    title: 'Maquinário Articulado & Polias',
    category: 'Máquinas',
    tag: 'Biomecânica & Tração Guiada',
    description:
      'Aparelhos com eixos anatômicos convergentes e divergentes, estações de cabo com roldanas de baixo atrito para contração muscular contínua sem trancos articulares.',
    image: gymPhotoSrc,
  },
  {
    id: 'bancos-anilhas',
    title: 'Bancos Ajustáveis & Anilhas Calibradas',
    category: 'Anilhas & Bancos',
    tag: 'Progressão de Carga Segura',
    description:
      'Bancos com múltiplas inclinações para peitorais e ombros, suporte de barras e anilhas organizadas para ajuste milimétrico na sua evolução de carga semanal.',
    image: gymPhotoSrc,
  },
  {
    id: 'cardio-mobilidade',
    title: 'Condicionamento, Mobilidade & Aquecimento',
    category: 'Cardiovascular',
    tag: 'Vitalidade & Recuperação',
    description:
      'Área arejada dedicada à ativação articular, mobilidade dinâmica pré-treino e condicionamento aeróbico para complementar seu treino de força.',
    image: gymPhotoSrc,
  },
];

export const SpaceCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Carousel Controls Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ellus-green animate-pulse" />
          <span className="font-display text-xs font-bold uppercase tracking-wider text-neutral-300">
            Galeria do Salão • {selectedIndex + 1} de {SPACE_SLIDES.length}
          </span>
        </div>

        {/* Minimalist Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="w-9 h-9 rounded border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none active:scale-95"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="w-9 h-9 rounded border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none active:scale-95"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-background-deep" ref={emblaRef}>
        <div className="flex touch-pan-y select-none">
          {SPACE_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_75%] lg:flex-[0_0_65%] pl-0 relative group"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                {/* Lazy Loaded Image with Dark Treatment */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.12] group-hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-deep/70 via-transparent to-transparent" />

                {/* Top Tempered Glass Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-white bg-neutral-950/75 backdrop-blur-md border border-neutral-700/60 px-3 py-1 rounded shadow-inner">
                    {slide.category}
                  </span>
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-neutral-400 bg-neutral-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-neutral-800 hidden sm:inline-block">
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Slide Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-1.5">
                    {slide.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-none">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar / Dots */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex
                  ? 'w-8 bg-ellus-green shadow-[0_0_10px_rgba(150,172,98,0.5)]'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-700'
              }`}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>

        <span className="text-[11px] font-display uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" strokeWidth={1.5} />
          Arraste para navegar
        </span>
      </div>
    </div>
  );
};

