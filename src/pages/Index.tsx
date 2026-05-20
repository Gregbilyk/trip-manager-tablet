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
  const [ambient, setAmbient] = useState<string | null>(null);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'trip-landing': return <TripLanding />;
      case 'trips':        return <TripsList onAmbient={setAmbient} />;
      case 'today':        return <Today />;
      case 'profile':      return <Profile />;
      case 'credits':      return <Credits />;
      case 'leaderboard':  return <Leaderboard />;
      case 'campaigns':    return <Campaigns />;
      default:             return <TripLanding />;
    }
  };

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  return (
    <SidebarProvider>
      {/* data-ambient drives the page background hue-shift via CSS */}
      <div
        className="min-h-screen flex w-full"
        style={{ background: 'var(--cobalt)', transition: 'background 900ms cubic-bezier(0.22,0.61,0.36,1)' }}
        data-ambient={ambient ?? undefined}
      >
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarInset>
          {/* Glass topbar */}
          <header className="topbar-glass sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 px-6">
            <SidebarTrigger
              className="-ml-1 text-steel hover:text-ivory transition-colors"
              style={{ color: 'var(--steel)' }}
            />
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
