import React, { useState } from 'react';
import { Menu, X, Gamepad2, Trophy, Users, Crown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Games', icon: Gamepad2 },
    { title: 'Tournaments', icon: Trophy },
    { title: 'Teams', icon: Users },
    { title: 'Popular', icon: Crown },
    { title: 'Rankings', icon: Crown },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        {/* RGB line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur animate-pulse" />
                <Gamepad2 className="w-full h-full text-purple-500 relative" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                GamersHQ
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.title}
                  className="group relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Side Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {/* Mobile Menu Items */}
        <div className="h-full pt-20 pb-4 overflow-y-auto">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                className="group w-full flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-md transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;