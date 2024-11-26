import React, { useState } from 'react'; {useState}
import DashboardStats from './DashboardStats';
import VisitorPopup from './VisitorPopup';
//import Applicants from './Applicants'; 


function Dashboard() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const stats = [
        { iconSrc: './new-visitor.svg', count: 0, label: 'Visitors' },
        { iconSrc: './magnet.svg', count: 0, label: 'Leads' },
        { iconSrc: './inquiries.svg', count: 0, label: 'Inquiries' },
        { iconSrc: './class-enrollments.svg', count: 0, label: 'Class Enrollments' },
        { iconSrc: './global-education.svg', count: 1, label: 'Abroad Enrollments' },
        { iconSrc: './selection.svg', count: 1, label: 'Assigned Applicants' },
        { iconSrc: './appointment.svg', count: 0, label: 'Appointment/Follow-Up' },
        { iconSrc: './presentation.svg', count: 6967, label: 'Courses' },
        { iconSrc: './decision-making.svg', count: 0, label: 'Decision' },
        { iconSrc: './incoming.svg', count: 0, label: 'Incoming' },
        { iconSrc: './outgoing.svg', count: 0, label: 'Outgoing' }
    ];

    return (<>
    <div className="dashboard_btns flex space-x-4 ml-[13%] mt-8"> {/* Adjusted left margin to clear sidebar */}
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center space-x-2"
            >
                <span className="text-lg font-bold">+</span>
                <span>Add Applicant</span>
            </button>


            <button
                onClick={() => setIsPopupOpen(true)}
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center space-x-2 h-11"
            >
                <span className="text-lg font-bold">+</span>
                <span>Add Visitor</span>
            </button>
            <VisitorPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
        <div className="bg-gray-200 overflow-x-hidden"> {/* Prevent horizontal scrolling */}
            <div className="ml-[10rem] px-4 mt-6"> {/* Margin-left ensures alignment with sidebar */}
                {/* Dashboard Stats */}
                <div className="grid grid-cols-4 gap-6 p-4 bg-gray-200">
                    {stats.map((stat, index) => (
                        <DashboardStats
                            key={index}
                            iconSrc={stat.iconSrc}
                            count={stat.count}
                            label={stat.label}
                        />
                    ))}
                </div>

                <div className="mt-10 pb-10 space-y-6">
                    {/* First Row Div 1*/}
                    <div className="grid grid-cols-2 gap-6">
                        <div class="bg-white p-6 text-black shadow-md rounded-md h-80 flex flex-col">


                            <div class="flex justify-between items-center mb-4">
                                <h4 class="text-sm">APPOINTMENT / FOLLOW-UP</h4>
                                <button class="text-gray-500 font-medium underline">View All</button>
                            </div>


                            <div class="bg-blue-100 rounded-md p-4 mb-4">


                                <div class="grid grid-cols-4 gap-2">
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-orange-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-1 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            All(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-green-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-0 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            Appointment(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-yellow-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-1 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            FollowUp(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-blue-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-1 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            Today(0)
                                        </button>
                                    </div>
                                </div>


                                <div class="grid grid-cols-3 gap-2 mt-2">
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-gray-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-2 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            Upcoming(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-red-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-2 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            Missed(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-green-600 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-2 py-1 rounded focus:ring-2 focus:ring-gray-300">
                                            Attended(0)
                                        </button>
                                    </div>
                                </div>
                            </div>



                            <div class="flex flex-col items-center justify-center flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11V7m0 4v4m4-4H8m4-4a8 8 0 110 16 8 8 0 010-16z" />
                                </svg>
                                <p class="mt-2 text-gray-500 font-medium text-center">
                                    No data currently available.<br />
                                    Please check back later for updates.
                                </p>
                            </div>
                        </div>


                        {/* First Row Div 2*/}
                        <div class="bg-white p-6 text-black shadow-md rounded-md h-80 flex flex-col">

                            <div class="flex justify-between items-center mb-4">
                                <h4 class="text-sm">Tasks</h4>
                                <a href="#" class="text-gray-500 text-sm underline">View All</a>
                            </div>


                            <div class="bg-blue-100 rounded-md p-4 mb-4">
                                <div class="grid grid-cols-4 gap-2">
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-red-400 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-2 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            All Task(1)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-pink-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-2 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            Pending(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-blue-900 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-0 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            InProgress(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-blue-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-0 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            Completed(0)
                                        </button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-2 mt-2">
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-black inline-block mr-2"></span>
                                        <button class="text-sm text-black px-0 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            Important(0)
                                        </button>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="h-2 w-2 rounded-full bg-red-500 inline-block mr-2"></span>
                                        <button class="text-sm text-black px-0 py-1 rounded focus:ring-2 focus:ring-gray-400">
                                            Overdue(1)
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div class="bg-gray-100 rounded-md p-4 flex justify-between items-center">
                                <div>
                                    <p class="text-sm text-gray-600 flex items-center mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h4m-2 0v10m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        2 weeks ago
                                    </p>
                                    <p class="text-black font-medium">Task 1</p>
                                </div>
                                <div class="flex space-x-4">
                                    <div class="text-center">
                                        <p class="text-gray-500 text-xs">Assigned to</p>
                                        <p class="bg-gray-200 text-black rounded px-2 py-1 text-xs">test</p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-gray-500 text-xs">Created by</p>
                                        <p class="bg-gray-200 text-black rounded px-2 py-1 text-xs">test</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* Second Row Div 3*/}
                    <div className="grid grid-cols-2 gap-6">
                        <div class="bg-white p-6 text-black shadow-md rounded-md">

                            <h4 class="text-sm mb-4 pr-80">Recently Viewed</h4>

                            <div class="border rounded-md overflow-hidden">

                                <div class="bg-gray-100 text-sm font-medium text-gray-600 grid grid-cols-3 p-4">
                                    <div class="flex items-center">
                                        <span>Name</span>
                                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/small-up-arrow-4184374-3738260.png" alt="User" class="h-8 w-8 rounded-full mr-3" />
                                    </div>
                                    <div class="flex items-center">
                                        <span>Status</span>
                                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/small-up-arrow-4184374-3738260.png" alt="User" class="h-8 w-8 rounded-full mr-3" />
                                    </div>
                                    <div class="flex items-center">
                                        <span>Last updated</span>
                                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/small-up-arrow-4184374-3738260.png" alt="User" class="h-8 w-8 rounded-full mr-3" />
                                    </div>
                                </div>


                                <div class="grid grid-cols-3 p-4 text-sm items-center">
                                    <div class="flex items-center">
                                        <img src="https://cmst.xyz/images/no-user.png" alt="User" class="h-8 w-8 rounded-full mr-3" />
                                        <span>Arun</span>
                                    </div>
                                    <div>Abroad Enrollment</div>
                                    <div>3 weeks ago</div>
                                </div>
                            </div>
                        </div>



                        {/* Second Row Div 4*/}
                        <div class="bg-white p-6 text-black shadow-md rounded-md h-80">
                            <div class="flex justify-between items-center mb-4">
                                <h4 class="text-sm">ANNOUNCEMENTS</h4>
                                <button class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>

                            <div class="bg-gray-100 rounded-md p-4">
                                <p class="text-sm text-gray-500">No Announcements</p>
                            </div>
                        </div>

                    </div>





                    {/* Third Row Div 5*/}
                    <div className="grid grid-cols-2 gap-6">
                        <div class="bg-white p-6 text-black shadow-md rounded-md">

                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center gap-2">
                                    <h4 class="text-sm">VISA STATUS OF APPLICANTS</h4>
                                    <button class="text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 3c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>


                            <div class="flex flex-wrap items-center gap-2 mb-2 ml-20">
                                <div class="flex items-center border border-gray-300 rounded px-1 py-0.5">
                                    <input type="date" placeholder="Start Date" class="text-xs outline-none" />
                                </div>

                                <div class="flex items-center border border-gray-300 rounded px-1 py-0.5">
                                    <input type="date" placeholder="End Date" class="text-xs outline-none" />
                                </div>

                                <button class="bg-blue-500 text-white px-2 py-1 rounded text-xs flex-shrink-0">
                                    Filter
                                </button>

                                <button class="text-gray-500 flex-shrink-0">
                                    <img src="https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png" alt="User" class="h-6 w-6 rounded-full" />
                                </button>
                            </div>

                            <div class="relative h-48 rounded-md">
                                <img src="./visaStatus.png" alt="Chart" class="w-full h-full object-contain rounded-md" />
                            </div>

                            <div class="flex items-center gap-2 mt-2">
                                <div class="flex items-center">
                                    <span class="h-2 w-2 rounded-full bg-blue-500 inline-block mr-1"></span>
                                    <span class="text-xs">Completed</span>
                                </div>
                                <div class="flex items-center">
                                    <span class="h-2 w-2 rounded-full bg-gray-400 inline-block mr-1"></span>
                                    <span class="text-xs">Rejected</span>
                                </div>
                            </div>

                        </div>



                        {/* Third Row Div 6*/}
                        <div className="bg-white p-6 text-black shadow-md rounded-md h-85">
                            {/* Header Section */}
                            <div className="flex justify-between items-center mb-2">
                                {/* Title */}
                                <div className="text-sm font-medium">Conversions</div>
                                <button class="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 3c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                                    </svg>
                                </button>
                                {/* Filter Options */}
                                <div className="flex space-x-1">
                                    {/* Dropdowns */}
                                    <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
                                        <option value="Sel">Sel</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {/* Date Pickers */}
                                    <input
                                        type="date"
                                        className="border border-gray-300 rounded px-1 py-0.5 text-xs"
                                    />
                                    <input
                                        type="date"
                                        className="border border-gray-300 rounded px-1 py-0.5 text-xs"
                                    />
                                    {/* Filter Button */}
                                    <button className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
                                        Filter
                                    </button>

                                    <button class="text-gray-500 flex-shrink-0">
                                        <img src="https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png" alt="User" class="h-5 w-5 mr-3" />
                                    </button>
                                </div>
                            </div>


                            {/* Main Content Section */}
                            <div className="flex">
                                {/* Left Section with Names */}
                                <div className="flex flex-col justify-center w-1/3">
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-red-400 rounded-sm"></span>
                                            <span>Lead</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-blue-600 rounded-sm"></span>
                                            <span>Inquiring</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-pink-400 rounded-sm"></span>
                                            <span>Class Ongoing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-green-400 rounded-sm"></span>
                                            <span>Class Completed</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-pink-300 rounded-sm"></span>
                                            <span>Abroad Preparing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-yellow-300 rounded-sm"></span>
                                            <span>Abroad Processing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-orange-400 rounded-sm"></span>
                                            <span>Canceled</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-green-600 rounded-sm"></span>
                                            <span>Visa Granted</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-4 h-4 bg-orange-600 rounded-sm"></span>
                                            <span>Visa Rejected</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Section with Image */}
                                <div className="w-2/3 flex justify-center items-center">
                                    <img
                                        src="./conversions.png"
                                        alt="Dummy Placeholder"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* Fourth Row */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 text-black shadow-md rounded-md h-80">
                            {/* Title Section */}
                            <div className="flex items-center mb-4">
                                <span className="text-sm font-medium">Number of Applicants added in last 12 months</span>
                                <button class="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 3c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Chart Section */}
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src="./numberofapplicants.png"
                                    alt="Chart Placeholder"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="bg-transparent"></div> {/* Empty div to balance the row */}
                    </div>

                    {/* Last Row */}
                    <div className="grid grid-cols-1">
                        <div className="bg-white p-4 text-black shadow-md rounded-md h-auto">
                            {/* Title Section */}
                            <div className="flex items-center mb-4">
                                <span className="text-sm">Applicant workflow and Visa Processing statistics</span>
                                <button class="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 3c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                                    </svg>
                                </button>
                                <span className="text-sm ml-5">Statistics</span>
                            </div>

                            {/* Form and Statistics Container */}
                            <div className="grid grid-cols-12 gap-2">
                                {/* Left Section: Form */}
                                <div className="col-span-4">
                                    <div className="space-y-2">
                                        {/* Select Country */}
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-xs font-medium w-32">Select Country</label>
                                            <div className="relative w-full">
                                                <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs">
                                                    <option>Australia</option>
                                                </select>

                                            </div>
                                        </div>

                                        {/* Select Workflow */}
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-xs font-medium w-32">Select Workflow</label>
                                            <div className="relative w-full">
                                                <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs">
                                                    <option>Australia Student Visa</option>
                                                </select>

                                            </div>
                                        </div>

                                        {/* Select University */}
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-xs font-medium w-32">Select University</label>
                                            <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs">
                                                <option></option>
                                            </select>
                                        </div>

                                        {/* Start Date */}
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-xs font-medium w-32">Start Date</label>
                                            <input
                                                type="date"
                                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                                            />
                                        </div>

                                        {/* End Date */}
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-xs font-medium w-32">End Date</label>
                                            <input
                                                type="date"
                                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section: Statistics */}
                                
                                <div className="col-span-8">
                                <span className="font-bold text-xs mr-80 pr-60 pb-5">Total Application: 0</span>
                                    <div className="flex justify-between items-start mb-2">
                                        
                                        {/* Statistics Section (Left Side) */}
                                        
                                        <div className="grid grid-cols-2 gap-2 text-xs w-auto">
                                            {/* First Column: 7 Fields */}
                                            <div className="space-y-1">
                                                {[
                                                    "Applied for Offer Letter: 0",
                                                    "Documentation on Process: 0",
                                                    "GTE Interview Conducted: 0",
                                                    "Payment Request: 0",
                                                    "COE Received: 0",
                                                    "Visa Approved: 0",
                                                    "Refund Process: 0",                                                                                                                                                                                                                                                                                               
                                                ].map((stat, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between items-center border border-gray-300 rounded px-1 py-1" // Reduced px and py
                                                    >
                                                        <span>{stat}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Second Column: 7 Fields */}
                                            <div className="space-y-1">
                                                {[
                                                    "Offer Letter Issued: 0",
                                                    "GTE Approval Request: 0",
                                                    "GTE Approved: 0",
                                                    "Payment / COE Requested: 0",                                              
                                                    "Visa Lodge: 0",                                              
                                                    "Visa Refused: 0",
                                                    "Australia Arrived: 0",
                                                ].map((stat, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between items-center border border-gray-300 rounded px-1 py-1" // Reduced px and py
                                                    >
                                                        <span>{stat}</span>
                                                        
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: No Application Message */}
                                        <div className="text-blue-400 text-xs">
                                            There is no application added for the process so there is no data to create chart diagram
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
