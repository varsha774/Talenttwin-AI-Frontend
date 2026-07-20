import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-950 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        TalentTwin AI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="p-3 rounded hover:bg-slate-800"
        >
          Dashboard
        </Link>


        <Link
          to="/upload"
          className="p-3 rounded hover:bg-slate-800"
        >
          Resume Upload
        </Link>


      </nav>

    </div>
  );
}

export default Sidebar;