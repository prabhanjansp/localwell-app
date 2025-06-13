import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Purchases", path: "/purchases" },
    { name: "Stock", path: "/stock" },
    { name: "Sales", path: "/sales" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: localwell */}
          <div className="flex items-center space-x-8">
            <div className="flex place-items-start">
              <span className="text-2xl font-bold text-[#E91E63]">
                localwell
              </span>
              <span className="text-xs ml-1">®</span>
            </div>
          </div>

          {/* Center: nav items */}
          <nav className="flex space-x-8 flex-grow justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`pb-1 px-1 border-b-4 font-medium text-lg transition-colors ${
                  location.pathname === item.path
                    ? "border-[#E91E63] text-[#E91E63]"
                    : "border-transparent font-medium hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="bg-gray-200 p-2 rounded-3xl text-sm font-semibold">
            NA
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
