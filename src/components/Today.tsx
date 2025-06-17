import React, { useState } from 'react';
import { Bell, Star, Clock, Plane, MapPin, AlertCircle, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Today = () => {
  const [showItinerary, setShowItinerary] = useState(false);

  // Itinerary data for the modal (same as in TripSection)
  const itineraryData = [
    {
      day: 1,
      date: 'March 15, 2024',
      title: 'Arrival & Shibuya',
      activities: [
        { time: '10:00 AM', activity: 'Arrive at Narita Airport', location: 'Narita International Airport' },
        { time: '12:30 PM', activity: 'Check into hotel', location: 'Shibuya District' },
        { time: '2:00 PM', activity: 'Lunch at local ramen shop', location: 'Shibuya' },
        { time: '4:00 PM', activity: 'Explore Shibuya Crossing', location: 'Shibuya Crossing' },
        { time: '7:00 PM', activity: 'Dinner at izakaya', location: 'Shibuya' }
      ]
    },
    {
      day: 2,
      date: 'March 16, 2024',
      title: 'Senso-ji & Asakusa',
      activities: [
        { time: '9:00 AM', activity: 'Visit Senso-ji Temple', location: 'Asakusa' },
        { time: '11:00 AM', activity: 'Shopping at Nakamise Street', location: 'Asakusa' },
        { time: '1:00 PM', activity: 'Traditional lunch', location: 'Asakusa' },
        { time: '3:00 PM', activity: 'Tokyo Skytree visit', location: 'Sumida' },
        { time: '6:00 PM', activity: 'River cruise', location: 'Sumida River' }
      ]
    },
    {
      day: 3,
      date: 'March 17, 2024',
      title: 'Mt. Fuji Day Trip',
      activities: [
        { time: '7:00 AM', activity: 'Depart for Mt. Fuji', location: 'Shinjuku Station' },
        { time: '10:00 AM', activity: 'Lake Kawaguchi', location: 'Fujikawaguchiko' },
        { time: '12:00 PM', activity: 'Lunch with Mt. Fuji view', location: 'Kawaguchiko' },
        { time: '2:00 PM', activity: 'Chureito Pagoda', location: 'Fujiyoshida' },
        { time: '8:00 PM', activity: 'Return to Tokyo', location: 'Tokyo' }
      ]
    }
  ];

  const renderItineraryModal = () => (
    <div className="max-h-[60vh] overflow-y-auto space-y-4">
      {itineraryData.map((day) => (
        <Card key={day.day} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <CardTitle className="flex items-center space-x-3">
              <Calendar size={24} />
              <div>
                <div className="text-xl font-bold">Day {day.day}: {day.title}</div>
                <div className="text-blue-100">{day.date}</div>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="space-y-0">
              {day.activities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2 min-w-[100px]">
                    <Clock size={16} className="text-gray-500" />
                    <span className="font-medium text-gray-700">{activity.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">{activity.activity}</h4>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPin size={14} />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

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
        <button 
          onClick={() => setShowItinerary(true)}
          className="p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
        >
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

      {/* Itinerary Modal */}
      <Dialog open={showItinerary} onOpenChange={setShowItinerary}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <Calendar className="text-purple-600" size={24} />
              <span>Itinerary</span>
            </DialogTitle>
          </DialogHeader>
          
          {renderItineraryModal()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Today;
