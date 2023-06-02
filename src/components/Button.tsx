import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className="w-full rounded-full border border-transparent bg-green-500 p-3 font-bold text-black transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 "
      ></button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
