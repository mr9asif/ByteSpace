import React from 'react';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import LogoBand from '../components/sections/LogoBand';
import CourseList from '../components/sections/CourseList';
import LearningPaths from '../components/sections/LearningPaths';
import GrowthPromo from '../components/sections/GrowthPromo';
import ManagePromo from '../components/sections/ManagePromo';
import CreatorCTA from '../components/sections/CreatorCTA';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <LogoBand />
        <CourseList />
        <LearningPaths />
        <GrowthPromo />
        <ManagePromo />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
