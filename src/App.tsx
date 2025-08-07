import React from 'react';
import ProfileSection from './components/ProfileSection';
import CertificationSection from './components/CertificationSection';
import SkillsSection from './components/SkillsSection';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <main>
        <ProfileSection />
        <CertificationSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;