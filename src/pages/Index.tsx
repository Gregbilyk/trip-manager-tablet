
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '../components/AppSidebar';
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
    <SidebarProvider>
      <div className="min-h-screen bg-white flex w-full">
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarInset>
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-gray-100 px-6 bg-white">
            <SidebarTrigger className="-ml-1 text-gray-600 hover:text-gray-900" />
          </header>
          <main className="flex-1 p-8 overflow-auto">
            <div className="max-w-6xl mx-auto">
              {renderActiveTab()}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
