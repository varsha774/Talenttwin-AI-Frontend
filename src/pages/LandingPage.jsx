import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold text-blue-400">
          🚀 TalentTwin AI
        </h1>

        <p className="mt-4 text-gray-300 text-xl">
          Your AI-Powered Career Companion
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;