import React from 'react';

export default function HeaderBar() {
  return (
    <header className="bg-gray-900 text-white">
      {/* 
        Use a container with flex, space-between, and center alignment. 
        Adjust padding (py-2 px-4) or spacing as needed.
      */}
      <div className="flex items-center justify-between py-2 px-4 max-w-screen-xl mx-auto">
        
        {/* Left side: arrow icon + brand name */}
        <div className="flex items-center space-x-2">
          {/* Inline SVG arrow (you can replace with any icon library) */}
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 
                 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl font-bold">PropertyFinder</span>
        </div>
        
        {/* Right side: nav links */}
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            My Account
          </a>
          <a href="#" className="hover:text-gray-300">
            Property Data
          </a>
        </nav>
      </div>
    </header>
  );
}
