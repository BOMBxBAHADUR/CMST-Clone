import React from 'react';

const Sidebarr = ({ onCreateTask }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <button className="bg-blue-500 text-white py-2 px-4 mb-4 w-full rounded" onClick={onCreateTask}>
        Create Task
      </button>
      
      {/* Filters */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium">By Assignee</label>
          <select className="w-full border rounded p-2">
            <option>Select Assignee</option>
          </select>
        </div>
        
        <div>
          <label className="block font-medium">By Creator</label>
          <select className="w-full border rounded p-2">
            <option>Select Creator</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Status</label>
          <select className="w-full border rounded p-2">
            <option>All Status</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select className="w-full border rounded p-2">
            <option>Select Category</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Type</label>
          <select className="w-full border rounded p-2">
            <option>All</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Deadline Date</label>
          <input type="date" className="w-full border rounded p-2" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-2">
        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded">View Responsibility</button>
        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded">View Daily Report</button>
      </div>
    </div>
  );
};

export default Sidebarr;
