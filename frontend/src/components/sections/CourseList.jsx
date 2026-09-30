import { useState } from "react";

import CategoryPill from "../ui/CategoryPill";
import CourseCard from "../ui/CourseCard";
import SectionHeading from "../ui/SectionHeading";

// Course Images
import courseImg2 from "../../assets/Frame (2).png";
import courseImg1 from "../../assets/Frame (3).png";
import courseImg4 from "../../assets/Frame (4).png";
import courseImg5 from "../../assets/Frame (5).png";
import courseImg6 from "../../assets/Frame (6).png";
import courseImg3 from "../../assets/Frame.png";

const CourseList = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ];

  const courses = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      author: "purespace studio",
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      level: "Beginner",
      price: "$25",
      image: courseImg1,
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      author: "purespace studio",
      lessons: 24,
      duration: "4 hours 20 mins",
      comments: 42,
      rating: 4.8,
      level: "Intermediate",
      price: "$35",
      image: courseImg2,
    },
    {
      id: 3,
      title: "Creative Marketing",
      author: "purespace studio",
      lessons: 19,
      duration: "3 hours 10 mins",
      comments: 31,
      rating: 4.6,
      level: "Beginner",
      price: "$30",
      image: courseImg3,
    },
    {
      id: 4,
      title: "Social Media Marketing",
      author: "purespace studio",
      lessons: 21,
      duration: "3 hours 45 mins",
      comments: 48,
      rating: 4.7,
      level: "Beginner",
      price: "$28",
      image: courseImg4,
    },
    {
      id: 5,
      title: "Digital Illustration",
      author: "purespace studio",
      lessons: 16,
      duration: "2 hours 50 mins",
      comments: 37,
      rating: 4.5,
      level: "Intermediate",
      price: "$32",
      image: courseImg5,
    },
    {
      id: 6,
      title: "Motion Design Basics",
      author: "purespace studio",
      lessons: 22,
      duration: "4 hours 10 mins",
      comments: 45,
      rating: 4.9,
      level: "Advanced",
      price: "$40",
      image: courseImg6,
    },
  ];

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        {/* Section Heading */}
        <SectionHeading
          title={
            <>
              Discover Your Passion
              <br />
              Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
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

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
