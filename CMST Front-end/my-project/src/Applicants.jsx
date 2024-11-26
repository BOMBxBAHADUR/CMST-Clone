// Import React and hooks

import React, { useState, useEffect } from 'react';

// Import FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown, faTimes, faFilter, faEllipsisH, faSearch, faChevronRight, faChevronLeft, faDownload, faCommentDots, faUserPlus, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';


// Main Applicants Page Component
const Applicants = ({ user }) => {

  // State for modals and dropdowns
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [isExclamationPopupOpen, setExclamationPopupOpen] = useState(false);
  const [isEllipsisDropdownOpen, setEllipsisDropdownOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false); 
  
  // State for form selection (like percentage or GPA)
  const [selectedOption, setSelectedOption] = useState("");

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
// Toggle modal visibility for "Add Applicant"  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.popup') && 
        !event.target.closest('.ellipsis-btn')&&
        !event.target.closest('.filter-btn')
      ) {
        setEllipsisDropdownOpen(false);
        setFilterVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    console.log("Files uploaded:", files);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Files dropped:", files);
  };
  

  
  return (
    <div className="flex flex-col h-full w-full bg-white p-2">

      {/*-------------------------Second Row: Filter, Buttons, Search---------------------------*/}

      {/*---------------------------------Container for buttons and dropdown-----------------------*/}


      <div className="bg-gray-100 p-4 mt-[10px]  relative left-[96px] fixed">
      <div className="flex items-center space-x-2 mb-4 flex-nowrap">

        {/*---------------------------Filter Button-----------------------------------------*/}
        
        <button
          className="bg-gray-200 p-2 h-8 rounded-md hover:bg-gray-300 flex items-center text-sm px-4"
          onClick={() => setIsFilterVisible(!isFilterVisible)} 
        >
          <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
        </button>
        {isFilterVisible && (
      <div className="absolute top-10 mt-4 left-[5px] bg-gray-100 shadow-lg rounded-md p-4 w-90 filter-btn">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Applicants Filter</h3>
      <div className="space-y-4 text-gray-600 text-sm">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
        </div>

      {/* Applicant's Email */}
      <div>
        <label className="text-sm font-medium">Applicant's Email</label>
        <input type="email" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Phone Number */}
      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Interested Country */}
      <div>
        <label className="text-sm font-medium">Interested Country</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Interested Course */}
      <div>
        <label className="text-sm font-medium">Interested Course</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Added By */}
      <div>
        <label className="text-sm font-medium">Added By</label>
        <select className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white">
          <option>Select User</option>
        </select>
      </div>

      {/* Applicant Manager */}
      <div>
        <label className="text-sm font-medium">Applicant Manager</label>
        <select className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white">
          <option>Not Assigned</option>
        </select>
      </div>

      {/* Reference */}
      <div>
        <label className="text-sm font-medium">Reference</label>
        <select className="w-full mt-1 border border-gray-300  text-gray-300 rounded-md p-2 bg-white">
          <option>Friends</option>
          <option>Advertisement</option>
        </select>
      </div>

      {/* Date Range */}
      <div>
        <label className="text-sm font-medium">Start Date (By Created Date)</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>
      <div>
        <label className="text-sm font-medium">End Date (By Created Date)</label>
        <input type="date" className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white" />
      </div>

      {/* Updated Dates */}
      <div>
        <label className="text-sm font-medium">Updated Start Date</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>
      <div>
        <label className="text-sm font-medium">Updated End Date</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Filter By Test Score Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Test Score</h3>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="text-sm">Test</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>TOEFL</option>
              <option>IELTS</option>
              <option>PTE</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Comparison</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Greater than {'>'}</option>
              <option>Less than {'<'}</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Value</label>
            <input type="text" className="w-full p-2 border text-gray-300 border-gray-300 rounded" />
          </div>
        </div>
        <button className="text-blue-500 text-sm">Add another filter</button>
      </div>

      {/* Filter By Academic Score Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Academic Score</h3>
        <div className="mb-2">
          <label className="text-sm">Degree</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
            <option >Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="text-sm">Aggregate Type</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Percentage</option>
              <option>CGPA</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Comparison</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Greater than {'>'}</option>
              <option>Less than {'<'}</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Value</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <button className="text-blue-500 text-sm">Add another filter</button>
      </div>

       {/* Filter By Class Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md mt-4">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Class</h3>
        <div className="mb-2">
          <label className="text-sm text-gray-600">Class</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
           
            <option>Select class</option>
          
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-600">Status</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        </div>

      

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Apply Filter</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Clear</button>
      </div>
          </div>
        </div>
        )}


        {/*--------------------------------------Ellipsis Button-------------------------------------*/}
      <button
        onClick={() => setEllipsisDropdownOpen(!isEllipsisDropdownOpen)} // Toggle state on click
        className="bg-gray-200 p-2 h-8 rounded-md hover:bg-gray-300 flex items-centre text-sm px-4 ellipsis-btn"
      >
        <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {isEllipsisDropdownOpen && (
          <div className="absolute mt-44 left-[15px] bg-white shadow-lg rounded-md p-2 left-0 w-48">
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">Import Applicants</button>
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">Export Applicants</button>
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">File Sample of Applicants</button>
          </div>
        )}


        {/*------------------------------------Add Applicant Button------------------------------------------*/}
        <div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 text-sm whitespace-nowrap"
              onClick={openModal}
            >
              Add Applicant
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-[90%] max-w-5xl mx-auto">
                <div className="flex items-center justify-between px-6 py-2 -mt-2 border-b border-gray-200 bg-gray-100">
        <h2 className="text-left font-semibold">Add Applicant</h2>
        <button
          className="text-gray-400 hover:text-gray-600 transition"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
                  <div className="overflow-y-auto max-h-[400px] px-4">
                    {/* Tabs Section */}
                    <div className="p-4 border border-gray-300 rounded-md mt-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  ">
                        <button className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-red-600 hover:bg-red-600 hover:text-white transition">
                        <FontAwesomeIcon icon={faSearch} />
                          <span>Leads</span>
                          
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-blue-800 hover:bg-blue-800 hover:text-white transition">
                        <FontAwesomeIcon icon={faCommentDots} />
                          <span>Inquiring</span>
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-blue-500 hover:bg-blue-500 hover:text-white transition">
                        <FontAwesomeIcon icon={faUserPlus} />
                          <span>Class Enrollment</span>
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white transition">
                          
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Abroad Enrollment</span>
                        </button>
                      </div>
                    </div>


                    {/* Form */}
                    <form className="mt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-normal">Name*</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Secondary Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Phone Number*</label>
                          <input
                            type="tel"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                           
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Secondary Phone</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-normal">Date of Birth</label>
                            <input
                              type="date"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-normal">Gender</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option value="">Select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Reference</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value=""></option>
                            <option value="friends">Friends Referral</option>
                            <option value="web">Advertisement in Web</option>
                            <option value="newspaper">Advertisement in Newspaper</option>
                            <option value="others">Others</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Interested Country</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value=""></option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="uk">UK</option>
                            <option value="germany">Germany</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-normal">Interested Course</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                        </div>
                          
                        <div>
                          <label className="block text-sm font-normal">Tags</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                              
                            />
                        </div>
                        <div>
                          <label className="block text-sm font-normal">Counselor</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value=""></option>
                              <option value="admin">Test (Admin)</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <input type="checkbox" id="quick-appointment" />
                            <label htmlFor="quick-appointment" className="text-sm">
                              Quick Appointment
                            </label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <input
                              type="checkbox"
                              id="email"
                              className="accent-green-500"
                              checked
                            />
                            <label htmlFor="email" className="text-sm">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300 mt-5" />
                      <div className="flex items-center">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md mt-4 mb-1">Address</span>
                      </div>
                      <hr className="border-gray-300 mt-5" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-normal">Country</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal">City</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal">State</label>
                      <input
                        type="text"
                       className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal">Zip/Postal Code</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal">Street</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                     
                      />
                    </div>
                    </div>

                    <hr className="border-gray-300 mt-5" />
                      <div className="flex items-center">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md mt-4 mb-1">Academics</span>
                      </div>
                      <hr className="border-gray-300 mt-5" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-normal">Institution</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                              
                            />
                        </div>
                      <div>
                        
                    <label className="block text-sm font-normal">Deree Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal">Degree Level</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal">Passed Year</label>
                    <input
                      type="text"
                       className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal">Course Start</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal">Course End</label>
                    <input
                      type="date"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                     
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                  </div>
                  <div className="flex items-center space-x-6">
                    {/* Percentage Option */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="percentage"
                        name="option"
                        value="percentage"
                        checked={selectedOption === "percentage"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="accent-blue-600"
                      />
                      <label htmlFor="percentage" className="text-gray-600">Percentage</label>
                    </div>

                    {/* GPA Option */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="gpa"
                        name="option"
                        value="gpa"
                        checked={selectedOption === "gpa"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="accent-blue-600"
                      />
                      <label htmlFor="gpa" className="text-gray-600">GPA</label>
                    </div>

                    {/* Input Field */}
                    <input
                      type="text"
                      placeholder=""
                      disabled={!selectedOption} // Disable input if no option is selected
                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  </div>

                  <div className="flex items-center">
                      {/* Dotted Line */}
                      <div className="flex-grow border-t border-dotted border-gray-500"></div>

                      {/* Add Button */}
                      <button className="ml-2 bg-gray-200 text-gray-600 rounded-full p-2 shadow hover:bg-gray-300">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>


                          <hr className="border-gray-300 mt-5" />
                      <div className="flex items-center">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md mt-4 mb-1">Score</span>
                      </div>
                      <hr className="border-gray-300 mt-5" />
                          <div className="flex items-center space-x-[8px] mt-4">
                {/* Select Test */}
                
                <div>
                  <label className="block text-sm font-normal text-gray-700">Select Test</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value=""></option>
                    <option value="ielts">IELTS</option>
                    <option value="toefl">TOEFL</option>
                    <option value="sat">SAT</option>
                    <option value="gre">GRE</option>
                  </select>
                </div>

                {/* Overall */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">Overall</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* L */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">L</label>
                  <input
                    type="text"
                    className=" bg-white shadow-inset focus:outline-none focus:ring-2 border border-gray-300 rounded w-16 p-2 focus:outline-blue-500"
                  />
                </div>

                {/* R */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">R</label>
                  <input
                    type="text"
                   className=" bg-white shadow-inset focus:outline-none focus:ring-2 border border-gray-300 rounded w-16 p-2 focus:outline-blue-500"
                  />
                </div>

                {/* W */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">W</label>
                  <input
                    type="text"
                    className=" bg-white shadow-inset focus:outline-none focus:ring-2 border border-gray-300 rounded w-16 p-2 focus:outline-blue-500"
                  />
                </div>

                {/* S */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">S</label>
                  <input
                    type="text"
                    className=" bg-white shadow-inset focus:outline-none focus:ring-2 border border-gray-300 rounded w-16 p-2 focus:outline-blue-500"
                  />
                </div>

                {/* Attended Date */}
                <div>
                  <label className="block text-sm font-normal text-gray-700">Attended Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                      {/* Dotted Line */}
                      <div className="flex-grow border-t border-dotted border-gray-500"></div>

                      {/* Add Button */}
                      <button className="ml-2 bg-gray-200 text-gray-600 rounded-full p-2 shadow hover:bg-gray-300">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>


              <hr className="border-gray-300 mt-5" />
                      <div className="flex items-center">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md mt-4 mb-1">Documents</span>
                      </div>
                      <hr className="border-gray-300 mt-5" />

              <label className="block text-sm font-normal mb-2 mt-4 flex items-center">Attach Documents</label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-100"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    multiple
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="fileInput" className="cursor-pointer text-blue-600">
                    Click or Drag to Upload Files
                  </label>
                </div>

                <div className="mt-6">
                <hr className="border-gray-300 mt-5" />
                      <div className="flex items-center">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md mt-4 mb-1">Summary</span>
                      </div>
                      <hr className="border-gray-300 mt-5" />
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-inset focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter summary"
                    rows="4"
                  ></textarea>
                </div>
              </form>
              </div>

        {/*------------------------------Footer for add applicant form----------------------------*/}
          <div className="fixed-bottom flex justify-end items-right  mt-6">
            
            <div className="space-x-4">
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Applicant
              </button>
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save And Add Another
              </button>
            </div>
          </div>
        
                </div>
              </div>
            )}
        </div>



        <div className="relative w-full z-10">
          <button className="bg-gray-200 text-gray-600 w-full py-2 px-4 rounded hover:bg-gray-300 flex justify-between items-center">
            <span>Tags</span>
            <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          </button>
        </div>
     
        <div className="flex-grow"></div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search Applicant"
            className="outline-none text-gray-600 px-2 py-1"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-2">
          Search
        </button>
      </div>

            {/*----------------------Main Content Area---------------------------*/}
            
      <div className="flex-grow bg-white p-6 rounded-lg shadow-md text-xs ">
        {/* Top Filters Bar */}
        <div className="bg-gray-100 p-2 rounded-md mb-4 flex items-center justify-between ">

          <div className="flex items-center space-x-2 ml-auto ">
            <span className="flex items-center space-x-1">
            <button className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
          </button>
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Hot(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Warm(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Cold(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span>No Priority(0)</span>
            </span>

            {/* Separator line */}
            <div className="w-px h-4 bg-gray-300 mx-2"></div>

            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>Lead(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span>Inquiring(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span>Abroad Enrollments(0)</span>
              {/* Dropdown icon */}
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Decision(0)</span>
              {/* Dropdown icon */}
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </span>
          </div>

         
          <button className="text-blue-600 text-xs hover:underline underline decoration-blue-500 ml-4">
            Remove Filters
          </button>
        </div>
        
        
      {/*----------------------------------Table Header--------------------------------------------*/}
      <div className="bg-gray-50 rounded-md shadow-sm overflow-hidden">
        <div className="flex items-center p-2 text-gray-700 text-xs font-semibold">
          {/* Checkbox */}
          <div className="flex items-center w-12">
            <input type="checkbox" className="mr-1" />
          </div>

          {/* Column Headers */}
          <div className="flex w-full justify-between">
            
            <div className="w-1/12 flex items-center">
              <FontAwesomeIcon icon={faDownload} />
              <span>Name</span>
            </div>
            <div className="w-1/12 flex items-center">Status</div>
            <div className="w-2/12 flex items-center">Phone Number</div>
            <div className="w-1/12 flex items-center">Interested</div>
            <div className="w-1/12 flex items-center">
            <FontAwesomeIcon icon={faDownload} className="ml-1" />
              Priority 
            </div>
            <div className="w-1/12 flex items-center">Comments</div>
            <div className="w-2/12 flex items-center">Aplicant Manager</div>
            <div className="w-1/12 flex items-center">Score</div>
            <div className="w-2/12 flex items-center">
            <FontAwesomeIcon icon={faDownload} className="ml-1" />
            Latest Updated 
            </div>
            <div className="w-1/12 flex items-center">Added By</div>
            <div className="w-1/12 flex items-center">Tags</div>
            <div className="w-1/12 flex items-center">Actions</div>
          </div>
        </div>

        {/* Table Content */}
        <div className="p-4 text-center text-gray-500">
          No data available
        </div>
      </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <p className="text-gray-600 text-sm">Showing 0 to 0 of 0 entries</p>
            <div className="flex space-x-2 items-center">
          {/* Previous button */}
          <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50" disabled>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Page numbers */}
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            1
          </button>

          {/* Next button */}
          <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded hover:bg-gray-300">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
          </div>
        </div>

      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-2">Upgrade Your Plan</h2>
            <p className="text-gray-600 mb-4">Upgrade to access more features and capabilities.</p>
            <button
              onClick={() => setUpgradeModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setUpgradeModalOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
        
      )}
    </div>

  );
};

export default Applicants;
