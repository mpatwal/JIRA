import { Link, useNavigate } from "react-router-dom";
 

function Navbar() {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    // 👉 Role-based nav links
    let roleLinks;

    if (role === "ADMIN") {
        roleLinks = (
            <>
                
            </>
        );
    } else if (role === "DEVELOPER") {
        roleLinks = (
            <>
                <Link to="/assigned-projects" className="hover:underline">My Projects</Link>
                <Link to="/update-status" className="hover:underline">Update Progress</Link>
            </>
        );
    } else if (role === "TESTER") {
        roleLinks = (
            <>
                <Link to="/assigned-issues" className="hover:underline">My Issues</Link>
                <Link to="/report-bug" className="hover:underline">Report Bug</Link>
            </>
        );
    } else if (role === "MANAGER") {
        roleLinks = (
            <>
                <Link to="/team" className="hover:underline">View Team</Link>
                <Link to="/project-approvals" className="hover:underline">Approve Projects</Link>
            </>
        );
    }

    return (
        <nav className="bg-blue-600 text-white p-5 flex gap-6 mb-5 fixed top-0 left-0 w-full z-50">
            <Link to="/" className="hover:underline">Home</Link>

            {!token && (
                <>
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/register" className="hover:underline">Register</Link>
                </>
            )}

            {token && (
                <>
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                    {roleLinks}
                    <button onClick={handleLogout} className="hover:underline">Logout</button>
                </>
            )}
        </nav>
    );
}

export default Navbar;
