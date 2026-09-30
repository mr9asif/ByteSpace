import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 px-8 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-accent font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">ByteSpace</span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 border border-gray-200 rounded-full flex-1 outline-none focus:border-primary text-sm"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 max-w-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
          
          <div>
             <h4 className="font-bold text-gray-900 mb-6">Featured Courses</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="#" className="hover:text-primary">Featured Categories</Link></li>
                <li><Link to="#" className="hover:text-primary">Business</Link></li>
                <li><Link to="#" className="hover:text-primary">IT</Link></li>
                <li><Link to="#" className="hover:text-primary">Design</Link></li>
             </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-gray-900 mb-6">Development</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="#" className="hover:text-primary">Marketing</Link></li>
                <li><Link to="#" className="hover:text-primary">Photography</Link></li>
                <li><Link to="#" className="hover:text-primary">Finance</Link></li>
                <li><Link to="#" className="hover:text-primary">Sport</Link></li>
             </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-gray-900 mb-6">Become a Creator</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="#" className="hover:text-primary">Affiliate Program</Link></li>
                <li><Link to="#" className="hover:text-primary">Contact</Link></li>
                <li><Link to="#" className="hover:text-primary">Help</Link></li>
                <li><Link to="#" className="hover:text-primary">About</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
             <Link to="#" className="hover:text-gray-900">Privacy Policy</Link>
             <Link to="#" className="hover:text-gray-900">Terms of Service</Link>
             <Link to="#" className="hover:text-gray-900">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
