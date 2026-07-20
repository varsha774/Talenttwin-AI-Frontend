import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import ResumeDashboard from "../components/ResumeDashboard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          TalentTwin Dashboard
        </h1>

        {resumeData ? (
          <ResumeDashboard resume={resumeData} />
        ) : (
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold">
              No Resume Uploaded
            </h2>

            <p className="text-gray-400 mt-3">
              Please upload your resume first.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}