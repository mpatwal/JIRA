import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/Register'
import Login  from './components/auth/Login'
import Dashboard  from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div
        className="p-10 justify-center w-screen h-screen flex items-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundColor: "oklch(78.9% 0.154 211.53)" }}
      >
        <Routes>
          {/* Default route - Register page */}
          <Route path="/" element={<Register />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;