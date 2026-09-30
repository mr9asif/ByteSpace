import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
           <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">Img</div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-primary text-sm font-medium">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm">
        "{testimonial.content}"
      </p>
    </div>
  );
};

export default TestimonialCard;
