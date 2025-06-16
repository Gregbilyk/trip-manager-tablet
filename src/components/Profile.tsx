
import React from 'react';
import { User, MapPin, Calendar, Award, Settings, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const userStats = [
    { label: 'Total Trips', value: '24', icon: MapPin },
    { label: 'Countries Visited', value: '12', icon: Award },
    { label: 'Days Traveled', value: '156', icon: Calendar },
    { label: 'Trees Planted', value: '38', icon: Award }
  ];

  const recentTrips = [
    { destination: 'Tokyo, Japan', date: 'March 2024', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop' },
    { destination: 'Paris, France', date: 'January 2024', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=100&h=100&fit=crop' },
    { destination: 'Bali, Indonesia', date: 'November 2023', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account and travel preferences</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={40} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Sarah Johnson</h2>
            <p className="text-gray-600 mb-2">Explorer & Adventure Seeker</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Mail size={16} />
                <span>sarah.johnson@email.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Settings size={16} />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Icon className="text-blue-500 mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Trips */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Adventures</h3>
        <div className="space-y-4">
          {recentTrips.map((trip, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <img 
                src={trip.image} 
                alt={trip.destination}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{trip.destination}</h4>
                <p className="text-gray-500 text-sm">{trip.date}</p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Travel Preferences</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Style</label>
            <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Adventure & Exploration</option>
              <option>Luxury & Comfort</option>
              <option>Budget-Friendly</option>
              <option>Cultural Immersion</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification Preferences</label>
            <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Notifications</option>
              <option>Important Only</option>
              <option>Minimal</option>
              <option>Off</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
