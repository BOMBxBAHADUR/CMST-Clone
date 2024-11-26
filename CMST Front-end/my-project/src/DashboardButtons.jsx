import React, { useState } from 'react';
import VisitorPopup from './VisitorPopup';

function DashboardButtons() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
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
    );
}

export default DashboardButtons;
