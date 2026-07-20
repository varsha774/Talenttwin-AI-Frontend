import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        TalentTwin AI
      </h1>

      <p className="mt-4 text-xl">
        Your AI Career Twin
      </p>

      <Link
        to="/upload"
        className="mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Upload Resume
      </Link>
    </div>
  );
}