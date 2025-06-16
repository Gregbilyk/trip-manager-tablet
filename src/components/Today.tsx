
import React from 'react';
import { Bell, Star, Clock, Plane, MapPin, AlertCircle } from 'lucide-react';

const Today = () => {
  const notifications = [
    {
      id: 1,
      type: 'flight',
      title: 'Flight Check-in Available',
      message: 'Your flight to Tokyo opens for check-in in 2 hours',
      time: '2 hours',
      priority: 'high',
      icon: Plane
    },
    {
      id: 2,
      type: 'weather',
      title: 'Weather Update',
      message: 'Rain expected in Tokyo tomorrow. Pack an umbrella!',
      time: '4 hours',
      priority: 'medium',
      icon: AlertCircle
    },
    {
      id: 3,
      type: 'activity',
      title: 'Restaurant Reminder',
      message: 'Your reservation at Sukiyabashi Jiro is tomorrow at 7 PM',
      time: '6 hours',
      priority: 'medium',
      icon: MapPin
    },
    {
      id: 4,
      type: 'marketing',
      title: 'New Feature: Offline Maps',
      message: 'Download maps for your destination to use offline',
      time: '1 day',
      priority: 'low',
      icon: Star
    }
  ];

  const upcomingTasks = [
    { task: 'Complete online check-in', time: 'In 2 hours', urgent: true },
    { task: 'Download offline maps', time: 'Before departure', urgent: false },
    { task: 'Confirm hotel booking', time: 'Today', urgent: true },
    { task: 'Buy travel insurance', time: 'Before trip', urgent: false }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Today</h1>
          <p className="text-gray-600">Stay updated with your travel notifications</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Clock size={20} />
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Bell className="mr-2" size={20} />
          Notifications
        </h2>
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div 
                key={notification.id} 
                className={`p-4 rounded-xl border-2 ${getPriorityColor(notification.priority)} hover:shadow-md transition-all duration-200 cursor-pointer`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${getPriorityIcon(notification.priority)} bg-white`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                      <span className="text-xs text-gray-500">{notification.time} ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">{notification.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Today's Tasks */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Clock className="mr-2" size={20} />
          Today's Tasks
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${task.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className={`${task.urgent ? 'text-red-800 font-medium' : 'text-gray-700'}`}>
                    {task.task}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.urgent ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {task.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
          <Plane className="mx-auto mb-2" size={24} />
          <span className="text-sm font-medium">Check Flight Status</span>
        </button>
        <button className="p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
          <MapPin className="mx-auto mb-2" size={24} />
          <span className="text-sm font-medium">View Itinerary</span>
        </button>
        <button className="p-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
          <Bell className="mx-auto mb-2" size={24} />
          <span className="text-sm font-medium">Notification Settings</span>
        </button>
        <button className="p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors">
          <Star className="mx-auto mb-2" size={24} />
          <span className="text-sm font-medium">Rate Experience</span>
        </button>
      </div>
    </div>
  );
};

export default Today;
