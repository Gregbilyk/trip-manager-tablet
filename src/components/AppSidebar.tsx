
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
  SidebarTrigger,
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
    <Sidebar className="bg-white/80 backdrop-blur-sm border-r border-gray-200">
      <SidebarHeader className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">TravelPal</h1>
            <p className="text-gray-600 text-sm group-data-[collapsible=icon]:hidden">Your journey companion</p>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveTab(item.id)}
                      isActive={activeTab === item.id}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
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
