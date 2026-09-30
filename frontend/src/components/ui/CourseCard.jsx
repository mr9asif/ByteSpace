import { BarChart, Clock, MessageCircle, Star } from "lucide-react";

import Badge from "./Badge";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      {/* Course Image */}
      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 mb-4">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 group-hover:scale-105 transition-transform duration-300">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto no-scrollbar">
          <div className="bg-white/90 backdrop-blur text-gray-800 text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
            <BarChart size={10} />
            {course.lessons} Lessons
          </div>

          <div className="bg-white/90 backdrop-blur text-gray-800 text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
            <Clock size={10} />
            {course.duration}
          </div>

          <div className="bg-white/90 backdrop-blur text-gray-800 text-[14px] font-semibold px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
            <MessageCircle size={10} />
            {course.comments} comments
          </div>
        </div>
      </div>

      {/* Course Title + Rating */}
      <div className="flex items-start justify-between mb-2 gap-3">
        <h3 className="font-bold text-gray-900 text-lg line-clamp-1">
          {course.title}
        </h3>

        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-bold shrink-0">
          {course.rating}
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>

      {/* Author */}
      <p className="text-sm text-gray-500 mb-4">
        by <span className="text-primary font-medium">{course.author}</span>
      </p>

      {/* Level + Students */}
      <div className="flex items-center gap-2 mb-4">
        <Badge className="bg-gray-100 text-gray-600 border border-gray-200">
          <BarChart size={12} className="mr-1" />
          {course.level}
        </Badge>

        <div className="flex -space-x-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-gray-300 border border-white"
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          {course.price}

          <span className="text-xs text-gray-500 font-normal ml-1">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
