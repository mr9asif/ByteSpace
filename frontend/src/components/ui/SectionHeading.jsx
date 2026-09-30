import React from 'react';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
