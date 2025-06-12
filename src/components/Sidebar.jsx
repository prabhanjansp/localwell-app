import React from 'react';
import device from '../assets/device.svg'; // Assuming you have a device icon
import Profile from '../assets/profile.svg'; // Assuming you have a profile icon

const Sidebar = () => {
  const menuItems = [
    {
      title: 'Business Profile',
      icon: Profile
    },
    {
      title: 'Users & Devices',
      icon:device
    }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Control Centre</h2>
          <p className="text-sm text-gray-500">Select an option below to edit</p>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider mb-3">
            BUSINESS
          </div>
          {menuItems.map((item, index) => (
            <>
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-5 h-5"/>
              <span className="text-sm font-medium">{item.title}</span>
            
            </button>
            <hr/>
            </>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
