import React from 'react';
import {
  Calendar,
  List,
  Clock,
  User,
  Coins,
  Award,
  Megaphone,
  Plane,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ activeTab, setActiveTab }) => {
  const primaryNav = [
    { id: 'trip-landing', label: 'Current Trip',  icon: Plane  },
    { id: 'trips',        label: 'All Trips',     icon: List   },
    { id: 'today',        label: 'Today',         icon: Clock  },
    { id: 'profile',      label: 'Profile',       icon: User   },
  ];

  const libraryNav = [
    { id: 'credits',     label: 'Travel Credits', icon: Coins   },
    { id: 'leaderboard', label: 'Leaderboard',    icon: Award   },
    { id: 'campaigns',   label: 'Campaigns',      icon: Megaphone },
  ];

  const NavItem = ({ item }: { item: typeof primaryNav[0] }) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => setActiveTab(item.id)}
          isActive={isActive}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 border-l-2 ${
            isActive
              ? 'border-copper bg-copper/10 text-copper font-medium'
              : 'border-transparent text-steel hover:text-ivory hover:bg-cobalt-surface/60'
          }`}
          style={{
            fontFamily: 'var(--font-ui)',
            letterSpacing: '0.03em',
            color: isActive ? 'var(--copper)' : 'var(--steel)',
            background: isActive ? 'var(--copper-soft)' : undefined,
            borderLeftColor: isActive ? 'var(--copper)' : 'transparent',
          }}
        >
          <Icon size={16} strokeWidth={1.5} />
          <span>{item.label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar
      style={{
        background: 'var(--cobalt-deep)',
        borderRight: '1px solid var(--cobalt-line)',
      }}
    >
      {/* Brand */}
      <SidebarHeader className="px-6 pt-8 pb-6" style={{ borderBottom: '1px solid var(--cobalt-line)' }}>
        <div>
          <h1
            className="text-2xl tracking-tight"
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 500,
              color: 'var(--ivory)',
              letterSpacing: '-0.01em',
            }}
          >
            Concierge
          </h1>
          <div className="rule-gold mt-2 mb-3" />
          <p
            className="text-xs"
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--steel)',
            }}
          >
            refined wanderlust
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-5">
        {/* Primary nav */}
        <SidebarGroup>
          <p
            className="px-3 mb-3 text-xs"
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--steel)',
              opacity: 0.6,
            }}
          >
            Your journey
          </p>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {primaryNav.map(item => <NavItem key={item.id} item={item} />)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Library nav */}
        <SidebarGroup className="mt-6">
          <p
            className="px-3 mb-3 text-xs"
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--steel)',
              opacity: 0.6,
            }}
          >
            The library
          </p>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {libraryNav.map(item => <NavItem key={item.id} item={item} />)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer user card */}
      <SidebarFooter
        className="px-4 py-5"
        style={{ borderTop: '1px solid var(--cobalt-line)' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
            style={{
              background: 'var(--cobalt-surface)',
              border: '1px solid var(--copper-line)',
              color: 'var(--copper)',
              fontFamily: 'var(--font-ui)',
            }}
          >
            S
          </div>
          <div className="min-w-0">
            <p
              className="text-sm truncate"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--ivory)', fontWeight: 400 }}
            >
              Sarah Johnson
            </p>
            <p
              className="text-xs truncate"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--steel)', letterSpacing: '0.06em' }}
            >
              24 trips · Gold
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
