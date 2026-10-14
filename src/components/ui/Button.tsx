import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-red' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center font-display font-bold uppercase tracking-wider select-none rounded border transition-all duration-300 cursor-pointer active:scale-[0.97] active:translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:transition-transform before:duration-700';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[38px] gap-2',
    md: 'text-sm px-6 py-2.5 min-h-[46px] gap-2.5',
    lg: 'text-base px-8 py-3.5 min-h-[52px] gap-3',
  };

  const variantStyles = {
    primary:
      'bg-ellus-green hover:bg-ellus-green-hover text-neutral-950 font-black border-ellus-green shadow-[0_2px_14px_rgba(150,172,98,0.25)] hover:shadow-[0_4px_22px_rgba(150,172,98,0.4)]',
    secondary:
      'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white border-neutral-800 hover:border-neutral-700',
    'outline-red':
      'bg-transparent text-ellus-green border-ellus-green/60 hover:bg-ellus-green/15 hover:border-ellus-green hover:text-white',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900 border-transparent',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
        </span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-200">{icon}</span>}
      </span>
    </button>
  );
};
