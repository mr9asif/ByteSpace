import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import CategoryPill from '../ui/CategoryPill';
import CourseCard from '../ui/CourseCard';

const CourseList = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');
  
  const categories = [
    'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 
    'Social Media', 'UI/UX Design', 'Creative Marketing'
  ];

  const courses = Array(6).fill({
    title: 'Learn Figma from Basic',
    author: 'purespace studio',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    price: '$25'
  });

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        <SectionHeading 
          title="Discover Your Passion, Build Your Skills" 
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map(cat => (
            <CategoryPill 
              key={cat} 
              label={cat} 
              isActive={activeCategory === cat} 
              onClick={() => setActiveCategory(cat)} 
            />
          ))}
          <button className="text-primary font-medium text-sm ml-2 hover:underline">
            + More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
