import React from 'react';
import Manager from '../assets/manager.png'; // Assuming you have a manager image
import mail from '../assets/mail.svg'; // Assuming you have a mail icon
import phone from '../assets/phone.svg'; // Assuming you have a phone icon
const AccountManagerCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">My Account Manager</h2>
        <p className="text-sm text-gray-500">Feel free to reach out to them for any queries</p>
      </div>

      <div className="mb-4">
        <span className="text-xs font-semibold  uppercase tracking-wider">
          Level 1 Manager
        </span>
      </div>

      <div className="flex items-start space-x-4 mb-6">
        <div className="w-108 h-108 rounded-2xl shadow-sm overflow-hidden ">
          <img
            src={Manager}
            alt="Pallavi Rai"
            className="w-full h-full object-cover "
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Pallavi Rai</h3>
          <p className="text-sm text-gray-500 font-medium mb-3">Customer Excellence Officer</p>
          
          <div className="space-y-2 text-sm ">
            <p className='font-semibold'>Hi, I'm Pallavi, Your L1 Account Manager</p>
            <p className='text-[#757575]'>Talk to me on how to get the best out of LocalWell</p>
            <p className="mt-3">
              Since 2019, I've helped over 300 pharmacies across Andhra Pradesh, Telangana, and other regions digitize their daily operations.
            </p>
            <div className="mt-4 space-y-1">
              <p>Can speak English and Hindi.</p>
              <p>Available 9:30 am to 7:30 pm (Mon-Sat)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col place-items-start  gap-5 space-x-4">
        <button className="flex items-center space-x-2 text-sm ">
          <img
            src={mail}
            alt="main_icon"
            className="w-full h-full object-cover rounded-2xl shadow-sm"
            loading="lazy"
          />
          <span className='font-medium'>pallavi.rai@localwell.in</span>
        </button>
        
        <button className="bg-[#60096A] hover:bg-purple-900  text-white px-6 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors">
          <img
            src={phone}
            alt="phone_icon"
            className="w-15 h-15 object-cover rounded-2xl shadow-sm"
            loading="lazy"
          />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default AccountManagerCard;
