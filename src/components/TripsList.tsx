
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TripsList = () => {
  const trips = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      dates: 'March 15-22, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=200&fit=crop',
      participants: 4,
      daysLeft: 5
    },
    {
      id: 2,
      destination: 'Paris, France',
      dates: 'January 10-17, 2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=200&fit=crop',
      participants: 2,
      daysLeft: null
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      dates: 'May 20-30, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=200&fit=crop',
      participants: 6,
      daysLeft: 65
    },
    {
      id: 4,
      destination: 'New York, USA',
      dates: 'December 5-12, 2023',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=200&fit=crop',
      participants: 3,
      daysLeft: null
    }
  ];

  const getStatusBadge = (status: string, daysLeft: number | null) => {
    if (status === 'completed') {
      return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">Completed</span>;
    }
    if (daysLeft && daysLeft <= 7) {
      return <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Starting Soon</span>;
    }
    return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Upcoming</span>;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Trips</h1>
        <p className="text-gray-600">Manage all your past, current, and upcoming adventures</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trips.map((trip) => (
          <Link 
            key={trip.id} 
            to={`/itinerary/${trip.id}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group block"
          >
            <div className="relative h-48">
              <img 
                src={trip.image} 
                alt={trip.destination}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                {getStatusBadge(trip.status, trip.daysLeft)}
              </div>
              {trip.daysLeft && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-gray-800">
                    {trip.daysLeft} days to go
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{trip.destination}</h3>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span className="text-sm">{trip.dates}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span className="text-sm">{trip.participants} travelers</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Itinerary
                </span>
                <MapPin className="text-gray-400" size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
          Plan New Trip
        </button>
      </div>
    </div>
  );
};

export default TripsList;
