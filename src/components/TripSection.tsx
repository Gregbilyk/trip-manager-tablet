
import React, { useState } from 'react';
import { Plus, Check, Calendar, MapPin, Clock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TripSectionProps {
  section: {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    color: string;
    items: string[];
  };
}

const TripSection: React.FC<TripSectionProps> = ({ section }) => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  
  const Icon = section.icon;
  
  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-200 bg-blue-50',
      yellow: 'border-yellow-200 bg-yellow-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
      red: 'border-red-200 bg-red-50',
      teal: 'border-teal-200 bg-teal-50'
    };
    return colorMap[color] || 'border-gray-200 bg-gray-50';
  };

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'text-blue-600',
      yellow: 'text-yellow-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      teal: 'text-teal-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  // Itinerary data for the modal
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

  const renderRegularModal = () => (
    <div className="mt-4 space-y-2">
      {section.items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          {section.id === 'packing' ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(index);
              }}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                checkedItems.has(index) 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : 'border-gray-300'
              }`}
            >
              {checkedItems.has(index) && <Check size={12} />}
            </button>
          ) : (
            <div className={`w-2 h-2 rounded-full bg-${section.color}-400`}></div>
          )}
          <span className={`text-gray-700 ${checkedItems.has(index) && section.id === 'packing' ? 'line-through opacity-60' : ''}`}>
            {item}
          </span>
        </div>
      ))}
      
      <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 mt-4 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full">
        <Plus size={16} />
        <span className="text-sm">Add item</span>
      </button>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`rounded-xl border-2 ${getColorClasses(section.color)} p-6 hover:shadow-lg transition-all duration-200 cursor-pointer`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon className={`${getIconColor(section.color)}`} size={24} />
              <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            </div>
            <div className="text-gray-400 text-sm">
              {section.id === 'itinerary' ? '3 days' : `${section.items.length} items`}
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Icon className={`${getIconColor(section.color)}`} size={24} />
            <span>{section.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        {section.id === 'itinerary' ? renderItineraryModal() : renderRegularModal()}
      </DialogContent>
    </Dialog>
  );
};

export default TripSection;
