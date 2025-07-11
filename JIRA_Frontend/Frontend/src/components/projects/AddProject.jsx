import React, { useState } from 'react';
import { Plus, CheckCircle, AlertCircle, Folder, FileText } from 'lucide-react';
import Navbar from "../sections/Navbar";


const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setError('');
      setName('');
      setDescription('');
    } catch (err) {
      setSuccess(false);
      setError('Failed to create project. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-cyan-400 flex items-center justify-center px-4 py-8">
  <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8">
    {/* Header */}
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-2 shadow-md">
        <Plus className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-purple-700">Create Project</h2>
      <p className="text-sm text-gray-500">Bring your ideas to life</p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Folder className="w-4 h-4" /> Project Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <FileText className="w-4 h-4" /> Description
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Describe your project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Creating...
          </div>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Create
          </span>
        )}
      </button>

      {/* Success / Error */}
      {success && (
        <div className="flex items-center gap-2 p-2 bg-green-100 border border-green-200 text-green-800 rounded-md text-sm">
          <CheckCircle className="w-4 h-4" />
          Project created successfully!
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 p-2 bg-red-100 border border-red-200 text-red-800 rounded-md text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </form>
  </div>
</div>

    </>
  );
};

export default AddProject; 