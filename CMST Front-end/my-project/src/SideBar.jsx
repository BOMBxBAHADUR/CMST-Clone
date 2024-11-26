import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserFriends,
  faClipboardCheck,
  faCalendarAlt,
  faPlane,
  faSuitcase,
  faGraduationCap,
  faDollarSign,
  faCog,
  faPhone,
  faTicketAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isCollapsed, setIsCollapsed, setActivePage }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: faHome, path: '/' },
    { name: 'Applicants', icon: faUserFriends, path: '/applicants' },
    { name: 'Tasks', icon: faClipboardCheck, path: '/tasks' },
    { name: 'Appointments', icon: faCalendarAlt, path: '/appointments' },
    { name: 'Abroad Section', icon: faPlane, path: '/abroad' },
    { name: 'Services', icon: faSuitcase, path: '/services' },
    { name: 'Classes', icon: faGraduationCap, path: '/classes' },
    { name: 'Payments', icon: faDollarSign, path: '/payments' },
    { name: 'Workflow', icon: faCog, path: '/workflow' },
    { name: 'Contacts', icon: faPhone, path: '/contacts' },
    { name: 'Applicant App', icon: faTicketAlt, path: '/applicant-app' },
    { name: 'Flight Booking', icon: faPlane, path: '/flight-booking' },
    { name: 'Settings', icon: faCog, path: '/settings' }
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-md flex flex-col transition-all duration-300 ${
        isCollapsed || isMobile ? 'w-[5%]' : 'w-[13%]'
      }`}
    >
      {/* Logo Section */}
      <div
        className="p-2 mb-2 flex justify-center items-center bg-green-500 w-full cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img src="./cmstlogo.PNG" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-1 px-1">
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`w-full flex items-center py-2 px-4 text-xs rounded-lg ${
              activeItem === item.name
                ? 'bg-green-100 text-green-600'
                : 'text-gray-500'
            } hover:bg-gray-100 ${
              isCollapsed || isMobile ? 'justify-center' : ''
            }`}
            onClick={() => setActiveItem(item.name)} // Set active item on click
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            {!(isCollapsed || isMobile) && (
              <span className="ml-6">{item.name}</span>
            )}
          </Link>
        ))}
      </div>

      {/* Footer Button */}
      <div className="bg-blue-600 text-white text-center p-2 mt-2">
        <button className="w-full text-base flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadset} className="w-2 h-2 mr-2" />
          {!(isCollapsed || isMobile) && 'Request For Training'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
