// Dashboard.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../auth/Navbar";

export const Dashboard = () => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !role) {
      navigate("/login");
    }
  }, [token, role, navigate]);

  const handleAddProject = () => {
    navigate("/projects/add");
  };

  const handleViewProjects = () => {
    navigate("/projects/view");
  };

  const handleCreateIssue = () => {
    navigate("/create-issue");
  };

  const handleAssignedProjects = () => {
    navigate("/project-issue");
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Dashboard
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          You are logged in as: <strong>{role}</strong>
        </p>

        {/* ✅ Only for Admin Role */}
        {role === "ADMIN" && (
          <div className="mt-6 space-x-4">
            <button
              onClick={handleAddProject}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Project
            </button>
            <button
              onClick={handleViewProjects}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              View Projects
            </button>
            <button
              onClick={handleCreateIssue}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Create Issue
            </button>
          </div>
        )}
        {role == "DEVELOPER" && (
          <div className="mt-6 space-x-4">
            <button
              onClick={handleAssignedProjects}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              View Issue
            </button>
            <button
              onClick={handleCreateIssue}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Manage Issue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
