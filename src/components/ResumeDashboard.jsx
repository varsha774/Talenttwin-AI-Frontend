import React from "react";

function ResumeDashboard({ resume }) {
  console.log("Resume Data:", resume);

  if (!resume) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        No Resume Data
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6">

      {/* Resume Score */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          📊 ATS Resume Score
        </h2>

        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full border-8 border-blue-500 flex items-center justify-center">
            <span className="text-5xl font-bold text-blue-600">
              {resume.resumeScore ?? 0}
            </span>
          </div>
        </div>

        <p className="text-center mt-4 text-gray-600">
          ATS Resume Score / 100
        </p>
      </div>

      {/* Detected Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-black mb-4">
          ✅ Detected Skills
        </h2>

        {resume.detectedSkills?.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {resume.detectedSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No detected skills found.
          </p>
        )}
      </div>

      {/* Missing Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-black mb-4">
          🚀 Missing Skills
        </h2>

        {resume.missingSkills?.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {resume.missingSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No missing skills.
          </p>
        )}
      </div>

      {/* AI Recommendation */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-black mb-4">
          💡 AI Recommendation
        </h2>

        <p className="text-gray-700 text-lg">
          {resume.recommendation ||
            resume.recomendation ||
            "No recommendation available."}
        </p>
      </div>
    </div>
  );
}

export default ResumeDashboard;