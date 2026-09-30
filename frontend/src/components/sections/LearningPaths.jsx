import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Palette, Code, Monitor, Briefcase, Megaphone, Camera } from 'lucide-react';

const LearningPaths = () => {
  const paths = [
    { name: 'Design', icon: Palette, color: 'text-accent', bg: 'bg-gray-50' },
    { name: 'Development', icon: Code, color: 'text-accent', bg: 'bg-gray-50' },
    { name: 'IT & Software', icon: Monitor, color: 'text-accent', bg: 'bg-gray-50' },
    { name: 'Business', icon: Briefcase, color: 'text-accent', bg: 'bg-gray-50' },
    { name: 'Marketing', icon: Megaphone, color: 'text-accent', bg: 'bg-gray-50' },
    { name: 'Photography', icon: Camera, color: 'text-accent', bg: 'bg-gray-50' },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading 
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {paths.map((path, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer w-40 h-40">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <path.icon className="text-gray-800" size={28} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-center">{path.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
