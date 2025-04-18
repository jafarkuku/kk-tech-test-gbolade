'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const base =
    'flex-auto cursor-pointer px-5 py-2 rounded-md text-sm font-semibold transition-colors';

  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border border-green-600 text-green-700 hover:bg-green-50',
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
