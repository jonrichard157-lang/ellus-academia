import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'metallic' | 'live-green' | 'glass';
  hasPulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  hasPulse = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded border transition-colors select-none';

  const variantStyles = {
    'live-green':
      'bg-emerald-950/40 text-emerald-400 border-emerald-800/60 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.12)]',
    accent:
      'bg-ellus-green/15 text-ellus-green border-ellus-green/40 shadow-[0_0_12px_rgba(150,172,98,0.18)]',
    neutral:
      'bg-neutral-900/90 text-neutral-300 border-neutral-800 backdrop-blur-sm',
    metallic:
      'bg-neutral-800/80 text-neutral-200 border-neutral-700/80',
    glass:
      'bg-neutral-900/50 text-neutral-200 border-neutral-800/80 backdrop-blur-md shadow-inner',
  };

  const isGreen = variant === 'live-green';

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {hasPulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isGreen ? 'bg-emerald-400' : 'bg-ellus-green'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isGreen ? 'bg-emerald-500' : 'bg-ellus-green'
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
