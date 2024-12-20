import React, { useEffect, useState } from 'react';
import { FaHome, FaBook, FaUser, FaCog } from 'react-icons/fa';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)'); // sm breakpoint in Tailwind CSS
    setIsOpen(!mediaQuery.matches);

    const handleResize = () => setIsOpen(!mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className={`flex flex-col p-4 h-full  bg-white transition-all duration-300 shadow-lg ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:flex hidden lg:relative absolute self-end p-2 mb-4 text-gray-500 hover:text-gray-800 focus:outline-none"
      >
        {isOpen ? <IoArrowBackCircle className='text-2xl' /> : <IoArrowBackCircle className='text-2xl transform rotate-180' />}
      </button>

      {/* Sidebar Links */}
      <div className="flex flex-col space-y-4">
        <SidebarLink icon={<FaHome />} to='/institutions' label="Home" isOpen={isOpen} />
        <SidebarLink icon={<FaBook />} to='/institutions/StudentDetails' label="View Student" isOpen={isOpen} />
        <SidebarLink icon={<FaUser />} to='/institutions/openings' label="Applications" isOpen={isOpen} />
        <SidebarLink icon={<FaCog />} to='/institutions/applications' label="Openings" isOpen={isOpen} />
        <SidebarLink icon={<FaCog />} to='/institutions/manageevents' label="View Events" isOpen={isOpen} />
      </div>
      <div className="text-5xl">
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, isOpen, to }) => {
  return (
    <Link to={to} className="flex items-center w-full px-4 py-2 text-gray-700 transition-colors duration-200 transform rounded-md hover:bg-gray-200 focus:outline-none">
      <span className="text-xl">{icon}</span>
      <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>{label}</span>
    </Link>
  );
};

export default Sidebar;