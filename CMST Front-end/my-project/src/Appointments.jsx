import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fortawesome/fontawesome-free/css/all.min.css";
import listPlugin from "@fullcalendar/list"; // Import the list plugin
import "./Appointments.css"; // Import custom styles

const Appointments = () => {
  // State to control the active section (list or calendar)
  const [activeSection, setActiveSection] = useState("list");

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-[#f7f9f7] w-screen h-screen mt-[1.3rem] -ml-32">
      <div className="font-bold text-gray-600 -ml-[60rem]">
        Appointments ({activeSection})
      </div>
      <div className="bg-blue-100 px-3 py-2 mt-2 mx-14 ml-52">
        <div className="flex justify-end gap-3 text-sm text-gray-700">
          {/* Add additional sections here if needed */}
          <p
            onClick={() => handleSectionClick("all")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "all" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-orange-400 text-xs mr-1"></i>
            All (0)
          </p>
          <p
            onClick={() => handleSectionClick("appointment")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "appointment" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
            Appointment (0)
          </p>
          <p
            onClick={() => handleSectionClick("followUp")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "followUp" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-yellow-500 text-xs mr-1"></i>
            Follow Up (0)
          </p>
          <p
            onClick={() => handleSectionClick("today")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "today" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-blue-500 text-xs mr-1"></i>
            Today (0)
          </p>
          <p
            onClick={() => handleSectionClick("upcoming")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "upcoming" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-blue-900 text-xs mr-1"></i>
            Upcoming (0)
          </p>
          <p
            onClick={() => handleSectionClick("missed")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "missed" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-orange-500 text-xs mr-1"></i>
            Missed (0)
          </p>
          <p
            onClick={() => handleSectionClick("attended")}
            className={`cursor-pointer py-[0.06rem] px-[0.1rem] ${
              activeSection === "attended" ? "border border-gray-400" : ""
            }`}
          >
            <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
            Attended (0)
          </p>
        </div>
      </div>
      <div className="flex items-center gap-80 ">
        <div className="mr-[14rem]">
          <i className="absolute fa-solid fa-magnifying-glass text-gray-500 ml-56 mt-[1.9rem]"></i>
          <input
            placeholder="Appointment"
            className="mt-4 ml-[13rem] pr-96 pl-9 py-2 border outline-blue-500"
          />
          <button className="py-3 pt-3.5 px-4 ml-3 bg-blue-600 text-white rounded-md text-xs">
            Search
          </button>
        </div>

        {/* List and Calendar buttons */}
        <div className="flex gap-3 -ml-[6.4rem] text-center border px-1 py-1 rounded-lg text-gray-400 text-xs">
          <button
            onClick={() => handleSectionClick("list")}
            className={`py-2 px-4 rounded-lg ${
              activeSection === "list" ? "bg-green-500 text-white" : ""
            }`}
          >
            List
          </button>
          <button
            onClick={() => handleSectionClick("calendar")}
            className={`py-2 px-4 rounded-lg ${
              activeSection === "calendar" ? "bg-green-500 text-white" : ""
            }`}
          >
            Calendar
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div className="absolute border ml-52 mt-5">
        {activeSection === "list" && (
          <div>
            <div className="flex justify-start flex-wrap bg-[#f9faf9] mt-3 px-3 gap-[4.2rem] font-medium text-sm text-gray-700 mb-3">
              <p>
                Name
                <i className="fa-solid fa-caret-down ml-1 pl-3"></i>
              </p>
              <p>
                Type
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Attendant
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Phone Number
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Note
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Date
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Start Time
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                End Time
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Status
                <i className="fa-solid fa-caret-down ml-1"></i>
              </p>
              <p>
                Action
                <i className="fa-solid fa-caret-down ml-1 pr-2"></i>
              </p>
            </div>
            <div className="bg-white text-sm flex justify-center">
              No data available
            </div>
          </div>
        )}
      </div>

      <div className="bg-white text-xs  w-[83%] ml-[13rem] mr-[4rem] ">
        {/* Calendar Section */}
        {activeSection === "calendar" && (
          <div className="bg-white mt-5">
            <hr className="border h-1 bg-orange-200 mb-3" />
            <div className="ml-3 mr-3">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin,
                ]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "prev,next today",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
