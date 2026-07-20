function ResumeDashboard({ resume }) {
  if (!resume) {
    return <p>No Resume Data</p>;
  }

  return (
    <div>
      <h2>Resume Score: {resume.resumeScore}</h2>

      <h3>Detected Skills</h3>
      <ul>
        {resume.detectedSkills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        {resume.missingSkills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Recommendation</h3>
      <p>
        {resume.recommendation ||
          resume.recomendation ||
          "No recommendation"}
      </p>
    </div>
  );
}