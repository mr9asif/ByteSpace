import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ManagePromo = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                 Image Placeholder
               </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 -left-6 bg-primary text-white p-4 rounded-xl shadow-xl w-48">
               <p className="text-xs opacity-80 mb-1">Total Revenue</p>
               <h3 className="text-xl font-bold">$120.29</h3>
            </div>
            
            <div className="absolute top-40 -left-12 bg-primary text-white p-4 rounded-xl shadow-xl w-48">
               <p className="text-xs opacity-80 mb-1">Year to Date</p>
               <h3 className="text-xl font-bold mb-2">$1,200.38</h3>
               <span className="text-[10px] bg-accent text-gray-900 px-2 py-0.5 rounded-full">+12%</span>
            </div>
            
            <div className="absolute bottom-20 -right-6 bg-white p-4 rounded-xl shadow-xl">
               <p className="text-xs font-medium text-gray-800 mb-2">Happy Students</p>
               <div className="flex items-center gap-1 mb-2 text-xs">
                  <span className="font-bold">4.5</span>
                  <span className="text-yellow-400">★</span>
               </div>
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold border-2 border-white">2K+</div>
               </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg">
              <span className="font-semibold text-gray-900">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            <ul className="space-y-4">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ManagePromo;
