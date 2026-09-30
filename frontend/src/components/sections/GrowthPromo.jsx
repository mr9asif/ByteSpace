import React from 'react';

const GrowthPromo = () => {
  return (
    <section className="py-20 px-8 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            
            <div className="flex items-center gap-12">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-1">12K</h3>
                <p className="text-gray-500">Students</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-1">70+</h3>
                <p className="text-gray-500">Courses</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-1">16</h3>
                <p className="text-gray-500">Creators</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
             <div className="relative w-full max-w-lg mx-auto aspect-square bg-gray-100 rounded-[3rem] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
             </div>
             
             {/* Floating UI Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent opacity-50 rounded-full blur-2xl"></div>
             <div className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div>
                   <h4 className="font-bold text-sm text-gray-900">Learn Figma from Basic</h4>
                   <p className="text-xs text-gray-500">by purespace studio</p>
                </div>
             </div>
             <div className="absolute bottom-20 -right-4 bg-white p-4 rounded-xl shadow-xl w-48">
                <p className="text-xs text-gray-500 mb-1">Learning Progress</p>
                <h3 className="text-2xl font-bold text-gray-900">55%</h3>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                   <div className="w-[55%] h-full bg-primary rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPromo;
