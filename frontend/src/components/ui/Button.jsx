import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200';
  
  const variants = {
    primary: 'bg-accent text-gray-900 hover:bg-[#bce600]',
    outline: 'border-2 border-gray-200 bg-transparent text-gray-800 hover:border-gray-300',
    ghost: 'border border-transparent bg-transparent hover:bg-gray-100',
    white: 'bg-white text-gray-900 hover:bg-gray-50',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
