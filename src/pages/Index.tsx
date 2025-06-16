
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TripLanding from '../components/TripLanding';
import TripsList from '../components/TripsList';
import Today from '../components/Today';
import Profile from '../components/Profile';
import Credits from '../components/Credits';
import Leaderboard from '../components/Leaderboard';
import Campaigns from '../components/Campaigns';
import Onboarding from '../components/Onboarding';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trip-landing');
  const [showOnboarding, setShowOnboarding] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'trip-landing':
        return <TripLanding />;
      case 'trips':
        return <TripsList />;
      case 'today':
        return <Today />;
      case 'profile':
        return <Profile />;
      case 'credits':
        return <Credits />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'campaigns':
        return <Campaigns />;
      default:
        return <TripLanding />;
    }
  };

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {renderActiveTab()}
        </div>
      </main>
    </div>
  );
};

export default Index;
