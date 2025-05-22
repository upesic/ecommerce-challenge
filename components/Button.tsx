'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
