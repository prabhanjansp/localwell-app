import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Purchases', path: '/purchases' },
    { name: 'Stock', path: '/stock' },
    { name: 'Sales', path: '/sales' },
    { name: 'NA', path: '/' }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#E91E63]">localwell</span>
              <span className="text-xs text-gray-400 ml-1">®</span>
            </div>
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'border-[#E91E63] text-[#E91E63]'
                      : 'border-transparent font-medium hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-gray-500 text-sm font-medium">
            NA
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
