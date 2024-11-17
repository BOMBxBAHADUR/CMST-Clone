import React from 'react';

function DashboardStat({ iconSrc, count, label }) {
    return (
        <div className="flex justify-between items-center bg-white p-2 rounded-md shadow-md w-52 cursor-pointer hover:border hover:border-blue-400">
  <div className="space-y-1">
    <h4 className="text-gray-600 font-medium text-sm">{label}</h4>
    <h1 className="text-lg font-bold text-gray-800">{count}</h1>
  </div>
  <figure className="stats__icon-wrapper bg-blue-400 p-1 rounded-full">
    <img src={iconSrc} alt={label} className="w-6 h-6" />
  </figure>
</div>

    );
}

export default DashboardStat;
