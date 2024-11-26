import React from 'react';

const VisitorPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add Visitor</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">
            &times;
          </button>
        </div>
        
        {/* Info Banner */}
        <div className="mt-4 p-3 bg-blue-100 text-blue-700 rounded flex items-center">
          <span className="text-blue-500 font-semibold mr-2">i</span>
          <p className="text-sm">
            Visitors are people who come for miscellaneous purposes. Applicants are not meant to be added here. Please add Applicants from Add Applicant form.
          </p>
        </div>

        {/* Scrollable Form Section */}
        <form className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter email"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">Address</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter address"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">
              Phone<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
              <select className="mr-2 bg-transparent outline-none">
                <option>🇳🇵</option>
                {/* Add other country codes if needed */}
              </select>
              <input
                type="tel"
                className="flex-1 outline-none"
                placeholder="Enter a phone number"
                required
              />
            </div>
          </div>

          {/* Purpose Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">Purpose</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter purpose"
            />
          </div>

          {/* Remark Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">Remark</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter remark"
            />
          </div>

          {/* Select User Field */}
          <div>
            <label className="block text-gray-700 font-medium text-left">Select User</label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select user</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              {/* Add other users as needed */}
            </select>
          </div>
        </form>

        {/* Fixed Buttons Section */}
        <div className="flex justify-end mt-4 border-t border-gray-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorPopup;
