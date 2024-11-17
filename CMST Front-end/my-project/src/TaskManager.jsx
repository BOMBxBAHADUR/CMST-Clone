import React, { useState } from 'react';
import CreateTaskModal from './CreateTaskModal'; // Import your modal component
import TaskList from './TaskList'; // Import your task list component

const TaskManager = () => {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [selectedTask, setSelectedTask] = useState(null); // State for selected task for editing

    const handleConfirm = (task) => {
        // If selectedTask exists, update the task; otherwise, add a new task
        if (selectedTask) {
            setTasks((prevTasks) =>
                prevTasks.map((t) => (t.id === selectedTask.id ? { ...task, id: t.id } : t))
            );
        } else {
            setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
        }
        setSelectedTask(null); // Reset selected task
        setIsModalOpen(false); // Close the modal
    };

    const openModalForEdit = (task) => {
        setSelectedTask(task); // Set selected task for editing
        setIsModalOpen(true); // Open the modal
    };

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Create Task</button>
            <TaskList tasks={tasks} onEdit={openModalForEdit} />
            <CreateTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
                taskDetails={selectedTask} // Pass the selected task details to modal for editing
            />
        </div>
    );
};

export default TaskManager;
