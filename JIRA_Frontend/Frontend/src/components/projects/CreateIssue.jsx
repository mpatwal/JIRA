import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

function CreateIssue() {
    const [project, setProjects] = useState([]);
    const token = localStorage.getItem("token");
    const [form, setForm] = useState({
        title: "",
        description: "",
        projectId: null,
        priority: "MEDIUM"
    });

    const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: name === "projectId" ? parseInt(value) : value,
  }));
};


 useEffect(() => {
    const fetchProjects = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get("http://localhost:8081/api/projects", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProjects(response.data); // no .content here
        } catch (error) {
            console.error("Error fetching user projects:", error);
        }
    };

    fetchProjects(); // ✅ no currentPage
}, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
        const response = await axios.post("http://localhost:8081/api/issue", form, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log("Issue created successfully:", response.data);
        alert("Issue created successfully!");
    } catch (error) {
        console.error("Error creating issue:", error);
        alert("Error: " + error.message);
    }
};


    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">Create a New Issue</h2>
            <p className="mb-2 text-gray-600">Fill in the details to create a new issue.</p>
            {/* Form for creating an issue will go here */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Issue Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter issue title"
                        required
                        value={form.title}
                        onChange={handleChange}
                        className="mt-1 h-10 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter issue description"
                        required
                        value={form.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-20 p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectId" className="block text-sm font-medium text-gray-700">Project</label>
                    <select
                        id="projectId"
                        name="projectId"
                        required
                        value={form.projectId}
                        onChange={handleChange}
                        className="mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                        <option>Select a project</option>
                        {project.map((project) => (
                            project.name && project.description && (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            )
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <select
                        id="priority"
                        name="priority"
                        value={form.priority}
                        onChange={handleChange}
                        className="mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                    </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Issue
                </button>
            </form>
        </div>
    );
}

export default CreateIssue;