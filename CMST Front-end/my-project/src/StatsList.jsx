import React from 'react';
import DashboardStats from './DashboardStats';

function Dashboard() {
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

    return (
        <div className="container mx-auto mt-6 ml-[12%] pr-14"> 
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
        </div>
    );
}

export default Dashboard;
