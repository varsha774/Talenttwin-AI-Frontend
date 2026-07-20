import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ResumeContext } from "../context/ResumeContext";

function UploadBox() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setResumeData } = useContext(ResumeContext);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF Resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);

      setResumeData(response.data.data);

      alert("Resume Uploaded Successfully ✅");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>
    </div>
  );
}

export default UploadBox;