// import React, { useState } from 'react';
// import Sidebar from './Sidebar'; // Make sure this file exists
// import TaskList from 'TaskList'; // Make sure this file exists
// import Header from 'Header'; // Make sure this file exists
// import CreateTaskModal from 'CreateTaskModal'; // Make sure this file exists
// import Sidebarr from 'Sidebarr';

// const Dashboard = () => {
//   // Modal open state
//   const [isModalOpen, setModalOpen] = useState(false);

//   // Tasks state
//   const [tasks, setTasks] = useState([]);

//   // Function to handle opening the modal
//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   // Function to handle closing the modal
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   // Function to handle adding a new task
//   const handleAddTask = (newTask) => {
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//     handleCloseModal(); // Close modal after adding task
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebarr onCreateTask={handleOpenModal} />
      
//       {/* Main Content Area */}
//       <div className="flex-grow">
//         <Header />
//         {/* TaskList with tasks passed as props */}
//         <TaskList tasks={tasks} />
//       </div>

//       {/* Create Task Modal with add task functionality */}
//       <CreateTaskModal 
//         isOpen={isModalOpen} 
//         onClose={handleCloseModal} 
//         onConfirm={handleAddTask} 
//       />
//     </div>
//   );
// };

// export default Dashboard;
