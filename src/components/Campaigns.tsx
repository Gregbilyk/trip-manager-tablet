
import React from 'react';
import { Megaphone, Calendar, MapPin, Users, ExternalLink, Clock } from 'lucide-react';

const Campaigns = () => {
  const activeCampaigns = [
    {
      id: 1,
      title: 'Sustainable Summer 2024',
      description: 'Choose eco-friendly accommodations and earn double credits for every sustainable choice you make during summer travels.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop',
      endDate: 'August 31, 2024',
      participants: 1234,
      reward: 'Double Credits + Eco Badge',
      status: 'active',
      progress: 65
    },
    {
      id: 2,
      title: 'Refer & Explore',
      description: 'Invite your friends to join TravelPal and unlock exclusive group travel discounts for everyone.',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=200&fit=crop',
      endDate: 'July 15, 2024',
      participants: 856,
      reward: '500 Credits + Group Discount',
      status: 'active',
      progress: 40
    },
    {
      id: 3,
      title: 'Hidden Gems Discovery',
      description: 'Visit off-the-beaten-path destinations and share your experiences to inspire other travelers.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
      endDate: 'September 30, 2024',
      participants: 2156,
      reward: 'Explorer Badge + Featured Story',
      status: 'new',
      progress: 15
    }
  ];

  const pastCampaigns = [
    {
      title: 'Spring Adventure Challenge',
      description: 'Complete 3 outdoor activities during spring season',
      completedBy: 1580,
      reward: 'Adventure Badge'
    },
    {
      title: 'Cultural Immersion Month',
      description: 'Engage in local cultural experiences',
      completedBy: 980,
      reward: 'Culture Enthusiast Badge'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">New</span>;
      case 'active':
        return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Active</span>;
      case 'ending':
        return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Ending Soon</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Travel Campaigns</h1>
        <p className="text-gray-600">Join exciting initiatives and earn rewards while exploring the world</p>
      </div>

      {/* Active Campaigns */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <Megaphone className="mr-2" size={20} />
          Active Campaigns
        </h2>
        <div className="space-y-6">
          {activeCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{campaign.title}</h3>
                      <p className="text-gray-600 mb-4">{campaign.description}</p>
                    </div>
                    {getStatusBadge(campaign.status)}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm">Ends {campaign.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">{campaign.participants.toLocaleString()} participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <ExternalLink size={16} />
                      <span className="text-sm">{campaign.reward}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Campaign Progress</span>
                      <span className="text-sm text-gray-500">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                      Join Campaign
                    </button>
                    <button className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:shadow-md transition-all duration-200 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Campaigns */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <Clock className="mr-2" size={20} />
          Recently Completed
        </h3>
        <div className="space-y-4">
          {pastCampaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-800">{campaign.title}</h4>
                <p className="text-gray-600 text-sm">{campaign.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">
                  {campaign.completedBy.toLocaleString()} completed
                </div>
                <div className="text-sm font-medium text-blue-600">
                  {campaign.reward}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Campaign CTA */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
        <Megaphone size={48} className="mx-auto mb-4 opacity-80" />
        <h3 className="text-2xl font-bold mb-2">Have an Idea for a Campaign?</h3>
        <p className="mb-6 opacity-90">
          We love hearing from our travel community! Share your ideas for future campaigns and help shape the adventures of fellow travelers.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
          Submit Campaign Idea
        </button>
      </div>

      {/* Campaign Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="font-semibold text-blue-800 mb-3">Campaign Guidelines</h3>
        <div className="text-blue-700 text-sm space-y-2">
          <p>• Campaigns run for limited periods - join early to maximize rewards</p>
          <p>• Progress is tracked automatically based on your travel activities</p>
          <p>• Rewards are distributed within 7 days of campaign completion</p>
          <p>• Some campaigns may have limited participant slots</p>
          <p>• Terms and conditions apply to all campaign rewards</p>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
