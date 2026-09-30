import React from 'react';
import { BarChart, Clock, MessageSquare, Star } from 'lucide-react';
import Badge from './Badge';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 mb-4">
        {/* Placeholder for course image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200 group-hover:scale-105 transition-transform duration-300">
           Image
        </div>
        
        {/* Floating tags */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto no-scrollbar">
          <div className="bg-white/90 backdrop-blur text-gray-800 text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1">
            <BarChart size={10} /> {course.lessons} Lessons
          </div>
          <div className="bg-white/90 backdrop-blur text-gray-800 text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1">
            <Clock size={10} /> {course.duration}
          </div>
        </div>
      </div>
      
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{course.title}</h3>
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-bold">
          {course.rating} <Star size={12} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">by <span className="text-primary font-medium">{course.author}</span></p>
      
      <div className="flex items-center gap-2 mb-4">
        <Badge className="bg-gray-100 text-gray-600 border border-gray-200">
           <BarChart size={12} className="mr-1" /> {course.level}
        </Badge>
        <div className="flex -space-x-1">
           {[1,2,3,4].map(i => (
             <div key={i} className="w-5 h-5 rounded-full bg-gray-300 border border-white"></div>
           ))}
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          {course.price}
          <span className="text-xs text-gray-500 font-normal ml-1">/lifetime</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
