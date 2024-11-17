import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <h2 className="text-lg font-medium">All / All Status</h2>
      <div className="flex items-center space-x-2">
        <span className="font-medium">Sort By:</span>
        <select className="border rounded p-2">
          <option>Status</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
