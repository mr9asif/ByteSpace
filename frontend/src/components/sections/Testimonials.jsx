import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      content: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.'
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      content: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      content: 'As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally.'
    }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-white to-[#f0f9ff]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-md leading-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-gray-600 max-w-lg pb-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
