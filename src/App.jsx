import React from "react";
import "./App.css";

const tasks = [
  {
    id: 1,
    title: "Complete React dashboard",
    description: "Finish the main dashboard layout.",
    category: "Development",
    status: "In progress",
    priority: "High",
    dueDate: "2026-11-25",
  },
  {
    id: 2,
    title: "Prepare project documentation",
    description: "Write the basic project documentation.",
    category: "Research",
    status: "To do",
    priority: "Medium",
    dueDate: "2026-11-27",
  },
  {
    id: 3,
    title: "Design login page",
    description: "Create a clean and simple login page.",
    category: "Design",
    status: "Completed",
    priority: "Low",
    dueDate: "2026-11-20",
  },
  {
    id: 4,
    title: "Test task functionality",
    description: "Check create, edit and delete operations.",
    category: "Testing",
    status: "In progress",
    priority: "High",
    dueDate: "2026-11-28",
  },
  {
    id: 5,
    title: "Learn JavaScript concepts",
    description: "Revise array methods and promises.",
    category: "Learning",
    status: "To do",
    priority: "Medium",
    dueDate: "2026-11-30",
  },
  {
    id: 6,
    title: "Update portfolio",
    description: "Add recent projects to the portfolio.",
    category: "Development",
    status: "Completed",
    priority: "Low",
    dueDate: "2026-11-22",
  },
];

const notes = [
  {
    title: "Plan your day",
    text: "Organise your priorities and focus on what matters most.",
  },
  {
    title: "Stay consistent",
    text: "Small steps every day can lead to great results.",
  },
  {
    title: "Take a break",
    text: "A short break can help you return with fresh energy.",
  },
];

export default function App() {
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In progress").length;

  return (
    <div className="app-container">
      <header className="header">
        <h1>FocusBoard</h1>
        <button type="button" className="primary-btn">
          + Add Task
        </button>
      </header>

      <main className="main-content">
        <section className="stats-grid">
          <div className="stat-card">
            <span>Total Tasks</span>
            <strong>{tasks.length}</strong>
          </div>
          <div className="stat-card">
            <span>In Progress</span>
            <strong>{inProgress}</strong>
          </div>
          <div className="stat-card">
            <span>Completed</span>
            <strong>{completed}</strong>
          </div>
          <div className="stat-card">
            <span>Completion</span>
            <strong>{Math.round((completed / tasks.length) * 100)}%</strong>
          </div>
        </section>

        <section className="notes-carousel">
          {notes.map((n, i) => (
            <div className="note-card" key={n.title}>
              <small>
                FOCUS NOTES · {i + 1} OF {notes.length}
              </small>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </div>
          ))}
        </section>

        <section className="task-section">
          <div className="task-list">
            {tasks.map((task) => (
              <article className="task-card" key={task.id}>
                <div className="task-info">
                  <div className="task-title-row">
                    <h3>{task.title}</h3>
                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </div>
                  <p>{task.description}</p>
                  <div className="task-meta">
                    <span>{task.category}</span>
                    <span>Due: {task.dueDate}</span>
                    <span>Status: {task.status}</span>
                  </div>
                </div>
                <div className="task-actions">
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                  <button type="button" className="delete-btn">
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
