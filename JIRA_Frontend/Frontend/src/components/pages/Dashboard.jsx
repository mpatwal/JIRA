// Dashboard.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar"; // ✅ Import directly

export const Dashboard = () => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !role) {
            navigate("/login");
        }
    }, [token, role, navigate]);

    return (
        <div>
            <Navbar /> {/* ✅ Include Navbar directly here */}

            <div className="pt-20 p-5">
                <h2 className="text-3xl font-bold">
                    Welcome to Dashboard</h2>
                <p className="mt-3 text-lg">
                    You are logged in as: <strong>{role}</strong>
                </p>
            </div>
        </div>
    );
};
