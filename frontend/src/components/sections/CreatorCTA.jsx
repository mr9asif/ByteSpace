import React from 'react';
import Button from '../ui/Button';

const CreatorCTA = () => {
  return (
    <section className="relative py-24 px-8 bg-primary overflow-hidden">
      {/* Decorative background shapes placeholder */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-90 rotate-45 transform" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent opacity-90 rounded-full" />
      <div className="absolute top-20 right-40 w-16 h-16 bg-accent opacity-90 transform skew-y-12" />
      <div className="absolute bottom-20 left-40 w-20 h-20 bg-white opacity-90 rounded-[30%] rotate-12 border-[6px] border-gray-100" />
      
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-3xl mx-auto">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        
        <Button variant="primary" className="px-8 py-3 text-base">
          Join as Creator
        </Button>
      </div>
    </section>
  );
};

export default CreatorCTA;
