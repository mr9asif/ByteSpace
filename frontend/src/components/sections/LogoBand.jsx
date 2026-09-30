import React from 'react';

const LogoBand = () => {
  const logos = [1, 2, 3, 4, 5];
  
  return (
    <section className="bg-gray-100 py-10 border-b border-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap items-center justify-between opacity-50 grayscale gap-8">
          {logos.map((i) => (
            <div key={i} className="flex items-center gap-2 text-xl font-bold text-gray-600">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
              </div>
              Logoipsum
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBand;
