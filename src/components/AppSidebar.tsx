
import React from 'react';
import { 
  Calendar, 
  List, 
  Clock, 
  User, 
  Activity, 
  Award,
  Megaphone,
  Plane
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
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'trip-landing', label: 'Current Trip', icon: Plane },
    { id: 'trips', label: 'All Trips', icon: List },
    { id: 'today', label: 'Today', icon: Clock },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'credits', label: 'Travel Credits', icon: Activity },
    { id: 'leaderboard', label: 'Leaderboard', icon: Award },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  ];

  return (
    <Sidebar className="bg-white border-r border-gray-100">
      <SidebarHeader className="p-6 border-b border-gray-50">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">TravelPal</h1>
          <p className="text-sm text-gray-500 group-data-[collapsible=icon]:hidden">Your journey companion</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveTab(item.id)}
                      isActive={activeTab === item.id}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                        activeTab === item.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
