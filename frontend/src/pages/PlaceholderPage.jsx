import React from 'react';
import { Link } from 'react-router-dom';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{title} Page</h1>
      <p className="text-gray-600 mb-8">This is a placeholder for the {title} page.</p>
      <Link to="/" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default PlaceholderPage;
