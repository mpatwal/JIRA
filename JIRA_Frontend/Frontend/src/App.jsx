import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Dashboard } from "./components/pages/Dashboard";
import AddProject from "./components/pages/AddProject";
import ViewProject from "./components/pages/ViewProject";
import CreateIssue from "./components/pages/CreateIssue";
import { IssueDisplay } from "./components/pages/IssueDisplay";
import AdminRoutes from "./components/auth/AdminRoutes";

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

          <Route path="/projects/view" element={<ViewProject />} />
          <Route path="/project-issue" element={<IssueDisplay />} />
          <Route
            path="/create-issue"
            element={
              <AdminRoutes>
                <CreateIssue />
              </AdminRoutes>
            }
          />
          <Route
            path="/projects/add"
            element={
              <AdminRoutes>
                <AddProject />
              </AdminRoutes>
            }
          />

          {/* Protecting routes for admin */}
          <Route
            path="/projects/new"
            element={
              <AdminRoutes>
                <AddProject />
              </AdminRoutes>
            }
          />

          <Route
            path="/issues/new"
            element={
              <AdminRoutes>
                <CreateIssue />
              </AdminRoutes>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
