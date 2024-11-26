import React, { useState, useEffect, useRef } from 'react';
import Switch from '@mui/material/Switch';

export default function CreateTaskModal({ isOpen, onClose, onConfirm }) {
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState([]);
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('12:00');
    const [reminder, setReminder] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [validationMessages, setValidationMessages] = useState({});
    const [newTask, setNewTask] = useState(null); // State to store the newly created task
    const userDropdownRef = useRef(null);
    const categoryDropdownRef = useRef(null);

    const users = ['Test User 1']; // Sample users
    const categories = ['Call', 'Documentation']; // Sample categories

    const resetForm = () => {
        setTitle('');
        setAssignee([]);
        setCategory([]);
        setDescription('');
        setDeadlineDate('');
        setDeadlineTime('12:00');
        setReminder(false);
        setValidationMessages({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationMessages({}); // Reset validation messages
        const messages = {};

        // Validation checks
        if (!title) {
            messages.title = 'Title is required';
        }
        if (!assignee.length && !reminder) {
            messages.assignee = 'At least one user must be assigned or reminder must be enabled';
        }
        if (!category.length) {
            messages.category = 'At least one category must be selected';
        }
        if (!deadlineDate) {
            messages.deadlineDate = 'Deadline Date is required';
        }
        if (!deadlineTime) {
            messages.deadlineTime = 'Deadline Time is required';
        }

        // If there are validation messages, set them and stop submission
        if (Object.keys(messages).length > 0) {
            setValidationMessages(messages);
            return;
        }

        // Create a new task object
        const createdTask = { title, assignee, category, description, deadlineDate, deadlineTime, reminder };
        setNewTask(createdTask); // Store the new task in state

        // Log the task details
        console.log(createdTask);

        // Call onConfirm with the new task details
        onConfirm(createdTask);

        // Reset the form fields
        resetForm();

        // Close the modal
        onClose();
    };

    const handleAssigneeChange = (user) => {
        setAssignee((prevAssignees) =>
            prevAssignees.includes(user) ? prevAssignees.filter((a) => a !== user) : [...prevAssignees, user]
        );

        // Clear validation message when users are selected
        if (validationMessages.assignee) {
            setValidationMessages((prev) => ({ ...prev, assignee: '' }));
        }
    };

    const handleCategoryChange = (categoryItem) => {
        setCategory((prevCategories) =>
            prevCategories.includes(categoryItem) ? prevCategories.filter((c) => c !== categoryItem) : [...prevCategories, categoryItem]
        );

        // Clear validation message when categories are selected
        if (validationMessages.category) {
            setValidationMessages((prev) => ({ ...prev, category: '' }));
        }
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        // Clear validation messages for respective inputs
        if (validationMessages[e.target.id]) {
            setValidationMessages((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const handleClickOutside = (e) => {
        if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
            setIsUserDropdownOpen(false);
        }
        if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target)) {
            setIsCategoryDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-semibold">Create a Task</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
                        &times;
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-grow p-6">
                    {/* Display new task details */}


                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Reminder Toggle and Select User in the same line */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center mr-4">
                                <label htmlFor="toggle" className="mr-3 text-sm font-medium text-gray-700">Reminder</label>
                                <Switch
                                    checked={reminder}
                                    onChange={() => setReminder(!reminder)}
                                    inputProps={{ 'aria-label': 'Reminder switch' }}
                                />
                            </div>

                            {/* User Dropdown */}
                            {!reminder && (
                                <div className="relative w-full" ref={userDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                        className="border rounded-lg w-full px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    >
                                        {assignee.length > 0 ? assignee.join(', ') : 'Select Users *'}
                                    </button>

                                    {isUserDropdownOpen && (
                                        <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
                                            <ul className="max-h-48 overflow-y-auto py-2 px-3">
                                                {users.map((user) => (
                                                    <li key={user} className="flex items-center mb-1">
                                                        <label className="flex items-center text-gray-700">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                                                checked={assignee.includes(user)}
                                                                onChange={() => handleAssigneeChange(user)}
                                                            />
                                                            <span className="ml-2 text-sm">{user}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {validationMessages.assignee && (
                            <p className="text-red-500 text-xs italic mb-4">{validationMessages.assignee}</p>
                        )}

                        {/* Title Input */}
                        <div className="mb-6">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                            <input
                                type="text"
                                id="title"
                                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={title}
                                onChange={handleInputChange(setTitle)}
                                required
                            />
                            {validationMessages.title && (
                                <p className="text-red-500 text-xs italic">{validationMessages.title}</p>
                            )}
                        </div>

                        {/* Category Dropdown */}
                        <div className="mb-6">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                            <div className="relative" ref={categoryDropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                                    className="border rounded-lg w-full px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                >
                                    {category.length > 0 ? category.join(', ') : 'Select Categories *'}
                                </button>
                                {isCategoryDropdownOpen && (
                                    <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
                                        <ul className="max-h-48 overflow-y-auto py-2 px-3">
                                            {categories.map((categoryItem) => (
                                                <li key={categoryItem} className="flex items-center mb-1">
                                                    <label className="flex items-center text-gray-700">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                                            checked={category.includes(categoryItem)}
                                                            onChange={() => handleCategoryChange(categoryItem)}
                                                        />
                                                        <span className="ml-2 text-sm">{categoryItem}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {validationMessages.category && (
                                <p className="text-red-500 text-xs italic">{validationMessages.category}</p>
                            )}
                        </div>

                        {/* Description Input */}
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                id="description"
                                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none h-40"
                                value={description}
                                onChange={handleInputChange(setDescription)}
                            />
                        </div>


                        {/* Deadline Date and Time */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Deadline *</label>
                            <input
                                type="date"
                                className="border rounded-lg px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={deadlineDate}
                                onChange={handleInputChange(setDeadlineDate)}
                                required
                            />
                            <input
                                type="time"
                                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={deadlineTime}
                                onChange={handleInputChange(setDeadlineTime)}
                                required
                            />
                            {validationMessages.deadlineDate && (
                                <p className="text-red-500 text-xs italic">{validationMessages.deadlineDate}</p>
                            )}
                            {validationMessages.deadlineTime && (
                                <p className="text-red-500 text-xs italic">{validationMessages.deadlineTime}</p>
                            )}
                        </div>


                        {/* Save Button */}
                        <div className="flex justify-end gap-7">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-150"
                            >
                                Close
                            </button>

                            {/* Save Button */}
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
