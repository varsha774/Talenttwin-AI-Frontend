import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold">TalentTwin AI</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/upload" className="hover:text-blue-400">
          Resume Upload
        </Link>

        <Link to="/login" className="hover:text-blue-400">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;