
import React, { useState } from 'react';
import { 
  FileText, 
  StickyNote, 
  CreditCard, 
  Calendar, 
  MapPin, 
  CheckSquare,
  MessageSquare,
  Phone,
  DollarSign,
  Cloud,
  Book
} from 'lucide-react';
import TripSection from './TripSection';
import GroupChat from './GroupChat';

const TripLanding = () => {
  const [showChat, setShowChat] = useState(false);
  
  const currentTrip = {
    destination: "Tokyo, Japan",
    dates: "March 15-22, 2024",
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop"
  };

  const sections = [
    {
      id: 'documents',
      title: 'Documents',
      icon: FileText,
      color: 'blue',
      items: ['Flight Tickets', 'Hotel Confirmation', 'Passport Copy', 'Travel Insurance']
    },
    {
      id: 'notes',
      title: 'Important Notes',
      icon: StickyNote,
      color: 'yellow',
      items: ['Cherry blossom season peak', 'Book restaurants early', 'Carry cash for temples', 'Download Google Translate']
    },
    {
      id: 'visa',
      title: 'Visa Information',
      icon: CreditCard,
      color: 'green',
      items: ['Tourist visa approved', 'Valid until April 30, 2024', 'Entry stamp required', 'Multiple entry allowed']
    },
    {
      id: 'itinerary',
      title: 'Itinerary',
      icon: Calendar,
      color: 'purple',
      items: ['Day 1: Arrival & Shibuya', 'Day 2: Senso-ji & Asakusa', 'Day 3: Mt. Fuji day trip', 'Day 4: Harajuku & shopping']
    },
    {
      id: 'activities',
      title: 'Activities',
      icon: MapPin,
      color: 'red',
      items: ['Tokyo Skytree tickets', 'Sushi making class', 'Robot Restaurant show', 'Tsukiji fish market tour']
    },
    {
      id: 'packing',
      title: 'Packing List',
      icon: CheckSquare,
      color: 'teal',
      items: ['Comfortable walking shoes', 'Portable charger', 'Umbrella', 'Camera', 'Warm jacket']
    }
  ];

  const utilities = [
    { id: 'emergency', title: 'Emergency Contacts', icon: Phone, color: 'red' },
    { id: 'currency', title: 'Currency Converter', icon: DollarSign, color: 'green' },
    { id: 'weather', title: 'Weather Forecast', icon: Cloud, color: 'blue' },
    { id: 'language', title: 'Language Tips', icon: Book, color: 'purple' }
  ];

  return (
    <div className="space-y-6">
      {/* Trip Header */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentTrip.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{currentTrip.destination}</h1>
              <p className="text-xl opacity-90 mb-2">{currentTrip.dates}</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                <span className="text-lg font-semibold">{currentTrip.daysLeft} days to go!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setShowChat(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <MessageSquare size={20} />
          <span>Group Chat</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:shadow-md transition-all duration-200">
          <Calendar size={20} />
          <span>Sync Calendar</span>
        </button>
      </div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sections.map((section) => (
          <TripSection key={section.id} section={section} />
        ))}
      </div>

      {/* Utilities */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Tools</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {utilities.map((utility) => {
            const Icon = utility.icon;
            return (
              <button
                key={utility.id}
                className={`p-4 rounded-xl border-2 border-${utility.color}-200 hover:border-${utility.color}-400 bg-${utility.color}-50 hover:bg-${utility.color}-100 transition-all duration-200 group`}
              >
                <Icon className={`text-${utility.color}-600 mb-2 mx-auto group-hover:scale-110 transition-transform`} size={24} />
                <p className={`text-${utility.color}-800 font-medium text-sm`}>{utility.title}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Group Chat Modal */}
      {showChat && (
        <GroupChat onClose={() => setShowChat(false)} tripName={currentTrip.destination} />
      )}
    </div>
  );
};

export default TripLanding;
