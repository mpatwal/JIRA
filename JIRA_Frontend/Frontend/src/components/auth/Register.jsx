import React, {useState} from 'react';
import axios from 'axios';
import mybg from './bk.jpg';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'ADMIN',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
       const res = await axios.post("http://localhost:8081/api/auth/register", formData)
       alert(res.data);
    }catch(err){
      console.error("Registration failed",err);
      alert("Error occured");
       }
    };

  return (
    <div
      style={{ backgroundImage: `url(${mybg})` }}
      className="w-screen h-screen bg-no-repeat bg-cover bg-center flex flex-col"
    >
      {/* Top Centered Heading */}
      <div className="w-full flex justify-center items-center pt-8">
        <h1 className="text-5xl font-extrabold text-neutral-950 drop-shadow-lg">
          JIRA APPLICATION
        </h1>
      </div>
      {/* Main Content: Register Form Centered Right */}
      <div className="flex flex-1 items-center justify-end pr-16">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Register New User
          </h2>
        
            <form className="space-y-5" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
      Username
    </label>
    <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={handleChange}
      required
      className="block w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="block w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
  <div>
    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
      className="block w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
  <div>
    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">
      Role
    </label>
    <select
      id="role"
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="block w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    >
      <option value="ADMIN">Admin</option>
      <option value="MANAGER">Manager</option>
      <option value="DEVELOPER">Developer</option>
      <option value="TESTER">Tester</option>
    </select>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
  >
    Register
  </button>
</form>

          <div className="mt-4 text-center">
            <span className="text-gray-600">Already have an account?</span>
            <button
              className="ml-2 text-blue-600 hover:underline font-semibold"
              onClick={() => {
                // Add your sign-in navigation logic here
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
