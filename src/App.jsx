import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import resumeData from './data/resume.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // In a real app we might fetch this or just import it like we did.
    // For GitHub Pages, importing the JSON statically works perfectly.
    setData(resumeData);
  }, []);

  if (!data) return <div id="resume-loading" style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>Loading resume…</div>;

  return (
    <div className="resume-wrapper">
      <Header headerData={data.personal} />
      <div className="resume-body">
        <Sidebar
          certs={data.certifications}
          skills={data.skills}
          softSkills={data.softSkills}
          education={data.education}
          community={data.community}
        />
        <MainContent experience={data.experience} projects={data.projects} />
      </div>
    </div>
  );
}

export default App;
