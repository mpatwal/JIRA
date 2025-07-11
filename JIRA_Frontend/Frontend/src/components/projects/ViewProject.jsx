import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../sections/Navbar";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProjects = async (page) => {
    try {
      const token = localStorage.getItem("token"); // ✅ Get token from localStorage
      const response = await axios.get(`http://localhost:8081/api/projects/all?page=${page}&size=5`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Include token in Authorization header
        },
      });

      console.log("API response:", response.data); // ✅ Check what's received
      setProjects(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />

      <div className="p-6 mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">All Projects</h2>

        <table className="min-w-full bg-white border mx-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Created By</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-gray-500 py-4">No projects found.</td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id}>
                  <td className="border px-4 py-2">{project.id}</td>
                  <td className="border px-4 py-2">{project.name}</td>
                  <td className="border px-4 py-2">{project.description}</td>
                  <td className="border px-4 py-2">{project.createdBy?.username}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {currentPage + 1} of {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={currentPage + 1 >= totalPages}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewProjects;
