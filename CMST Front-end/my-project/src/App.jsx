import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './SideBar';
import DashboardButtons from './DashboardButtons';
import DashboardStat from './DashboardStats';
import Dashboard from './StatsList';
import Applicants from './Applicants';
import Dashboardd from './Dashboard';
import Appointments from "./Appointments";
import Services from './Services';
import VisitorPopup from './VisitorPopup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        {/* Common Components (Header and Sidebar) */}
        <Header />
        <Sidebar />

        {/* Routing Section */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/tasks" element={<Dashboardd />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/DashboardButtons" element={<DashboardButtons/>} />
          <Route path="/VisitorPopup" element={<VisitorPopup/>} />
          <Route path="/DashboardStat" element={<DashboardStat/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
