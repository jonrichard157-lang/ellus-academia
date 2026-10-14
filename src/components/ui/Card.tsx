import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-background-surface border border-metallic-800 rounded-lg p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
        hoverEffect
          ? 'hover:border-metallic-600 hover:bg-background-elevated hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

