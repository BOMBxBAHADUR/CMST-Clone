import React, { useState, useEffect } from 'react';
import { Check, Phone, Clock, ChevronDown, Edit2 } from 'lucide-react';

// TaskDetail Component
function TaskDetail({ task, onClose, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(task.comments || []);

  useEffect(() => {
    setEditedTask({ ...task });
    setComments(task.comments || []);
  }, [task]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    onUpdate({ ...editedTask, comments });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, { text: newComment, timestamp: new Date().toISOString() }];
      setComments(updatedComments);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex">
          {/* Left Column - Task Details */}
          <div className="w-2/3 pr-4">
            {/* Task Title and Metadata */}
            <div className="flex justify-between items-center mb-4">
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleInputChange}
                  className="text-2xl font-bold w-full"
                />
              ) : (
                <h2 className="text-2xl font-bold">{task.title}</h2>
              )}
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                {/* Replacing ChevronDown with X */}
                <span className="text-red-700  font-bold right-36 relative left-72">X</span>
              </button>
            </div>

            {/* Task Metadata (Date, Assignees, Categories) */}
            <div className="mb-4 flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{editedTask.deadlineDate} {editedTask.deadlineTime}</span>
              <span className="mx-2">•</span>
              <span>Assigned to: {editedTask.assignee.join(', ')}</span>
              <span className="mx-2">•</span>
              <span>Categories: {editedTask.category.join(', ')}</span>
            </div>

            {/* Description Section */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold">Description</h3>
                {!isEditing && (
                  <button onClick={handleEdit} className="ml-2 text-blue-500 hover:text-blue-700">
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              {isEditing ? (
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              ) : (
                <p>{task.description || 'No description provided'}</p>
              )}
            </div>

            {/* Checklist Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Checklist</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add New Item
              </button>
            </div>

            {/* Comment Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Add Comment</h3>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Type your comment here..."
              />
              <button
                onClick={handleAddComment}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Comment
              </button>
            </div>

            {/* Display Comments */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded mb-2">
                    <p className="text-gray-800">{comment.text}</p>
                    <p className="text-xs text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No Comments...</p>
              )}
            </div>
          </div>

          {/* Right Column - Task Sidebar */}
          <div className="w-1/3 pl-4">
            {/* Status Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Status</h3>
              <select
                name="status"
                className="p-2 border rounded w-full"
                value={editedTask.status}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Important">Important</option>
              </select>
            </div>
            <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">
              In Progress</button>
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Completed</button>
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Important</button>

            {/* Categories Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <div className="space-x-2">
                {editedTask.category.map((cat, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 rounded">{cat}</span>
                ))}
              </div>
            </div>

            {/* Actions Section (Deadline, Assignee, Delete) */}
            <div className="mb-4">
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Deadline</button>
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Assignee</button>
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Assign Student</button>
              <button className="bg-gray-300 text-gray-700 w-full py-2 rounded mb-2">Get Shareable Link</button>
              <button className="bg-red-500 text-white w-full py-2 rounded">Delete Task</button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-4 text-right">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Edit Task
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


// TaskList Component
// TaskList Component
export default function TaskList({ tasks: initialTasks, onUpdateTask }) {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    setTasks(initialTasks || []);  // Set tasks based on initial input
  }, [initialTasks]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);  // Set the selected task to open details
  };

  const handleCloseDetail = () => {
    setSelectedTask(null);  // Close task detail view
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task  // Only update the specific task
      )
    );
    onUpdateTask(updatedTask);  // Call parent's update function with the updated task
    handleCloseDetail();  // Close the task detail view after saving
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}  // Use the task's unique ID
            className="bg-white border rounded-lg shadow-sm cursor-pointer"
            onClick={() => handleTaskClick(task)}
          >
            <div className="flex items-center p-4 justify-between">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={task.status === 'Completed'}
                    onChange={(e) =>
                      onUpdateTask({
                        ...task,
                        status: e.target.checked ? 'Completed' : 'Pending',
                      })
                    }
                    onClick={(e) => e.stopPropagation()}  // Prevent triggering task click event
                  />
                  <span className="ml-3 font-medium">{task.title}</span>
                </div>
                <p className="text-sm text-gray-500">
                  {task.description || 'No description provided'}
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Assigned to</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {task.assignee[0]}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Categories</span>
                  <div className="flex space-x-2">
                    {task.category.map((cat, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={handleCloseDetail}
          onUpdate={handleUpdateTask}
        />
      )}
    </div>
  );
}
