import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Dashboard } from "./components/pages/Dashboard";
import AddProject from "./components/projects/AddProject";
import ViewProject from "./components/projects/ViewProject";
import CreateIssue from "./components/projects/CreateIssue";
import { IssueDisplay } from "./components/sections/IssueDisplay";
function App() {
  return (
    <Router>
      <div
        className="p-10 justify-center w-screen h-screen flex items-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundColor: "oklch(78.9% 0.154 211.53)" }}
      >
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects/add" element={<AddProject />} />
          <Route path="/projects/view" element={<ViewProject />} />
          <Route path="/create-issue" element={<CreateIssue />} />
          <Route path="/project-issue" element={<IssueDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
