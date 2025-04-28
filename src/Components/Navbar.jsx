import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <div className="text-2xl font-bold">CurrencyConverter</div>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#convert" className="hover:underline">Convert</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;