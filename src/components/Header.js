// src/Header.js
import React from 'react';

const Header = ({ userName }) => {
  return (
    <header className="bg-white shadow py-4 px-8">
      <div className="flex justify-between items-center p-4">
      <div className="hidden sm:block">Welcome, User Name!</div>
        <div className="flex items-center">
          {/* User avatar and name */}
          <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center mr-2">
            <span className="text-white">U</span>
          </div>
          <span>{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
