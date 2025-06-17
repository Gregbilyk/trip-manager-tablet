
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Itinerary = () => {
  const { tripId } = useParams();
  
  // Mock data - in a real app this would come from an API or state management
  const tripData = {
    1: {
      destination: 'Tokyo, Japan',
      dates: 'March 15-22, 2024',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop',
      itinerary: [
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
      ]
    },
    // Add more trip data as needed
  };

  const trip = tripData[tripId as keyof typeof tripData];

  if (!trip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Trip not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to trips</span>
          </Link>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${trip.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{trip.destination}</h1>
                  <p className="text-lg opacity-90">{trip.dates}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary */}
        <div className="space-y-6">
          {trip.itinerary.map((day) => (
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
      </div>
    </div>
  );
};

export default Itinerary;
