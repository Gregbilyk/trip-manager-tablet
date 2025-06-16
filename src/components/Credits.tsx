
import React from 'react';
import { Activity, Gift, CreditCard, Star, Calendar } from 'lucide-react';

const Credits = () => {
  const creditHistory = [
    { id: 1, action: 'Trip Completion Bonus', amount: 500, date: '2024-01-15', type: 'earned' },
    { id: 2, action: 'Referral Bonus', amount: 250, date: '2024-01-10', type: 'earned' },
    { id: 3, action: 'Hotel Booking Discount', amount: -150, date: '2024-01-08', type: 'used' },
    { id: 4, action: 'Sustainability Bonus', amount: 100, date: '2024-01-05', type: 'earned' },
    { id: 5, action: 'Flight Upgrade', amount: -300, date: '2023-12-20', type: 'used' }
  ];

  const rewardOptions = [
    { title: 'Flight Upgrade', cost: 1000, description: 'Upgrade to business class', icon: CreditCard },
    { title: 'Hotel Discount', cost: 500, description: '20% off next hotel booking', icon: Gift },
    { title: 'Airport Lounge Access', cost: 750, description: 'Access to premium lounges', icon: Star },
    { title: 'Travel Insurance', cost: 300, description: 'Free travel insurance for next trip', icon: Activity }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Travel Credits</h1>
        <p className="text-gray-600">Earn and redeem credits for your amazing journeys</p>
      </div>

      {/* Credit Balance */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Available Credits</h2>
            <div className="text-4xl font-bold mb-4">2,450</div>
            <p className="opacity-90">Keep exploring to earn more!</p>
          </div>
          <div className="text-right">
            <Activity size={48} className="opacity-50 mb-4" />
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Next Reward: 550 credits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Earning Methods */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">How to Earn Credits</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Complete Trips</h4>
              <p className="text-gray-600 text-sm">Earn 500 credits per completed trip</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Gift className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Refer Friends</h4>
              <p className="text-gray-600 text-sm">Get 250 credits for each referral</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Star className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Leave Reviews</h4>
              <p className="text-gray-600 text-sm">Earn 50 credits per honest review</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
              <Activity className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Sustainable Travel</h4>
              <p className="text-gray-600 text-sm">Bonus credits for eco-friendly choices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Redeem Rewards */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Redeem Rewards</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rewardOptions.map((reward, index) => {
            const Icon = reward.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="text-blue-500" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">{reward.title}</h4>
                      <p className="text-gray-600 text-sm">{reward.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-500">{reward.cost}</div>
                    <div className="text-xs text-gray-500">credits</div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Redeem Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Credit History */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {creditHistory.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Activity className={`${
                    transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                  }`} size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{transaction.action}</h4>
                  <p className="text-gray-500 text-sm">{transaction.date}</p>
                </div>
              </div>
              <div className={`text-lg font-semibold ${
                transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'earned' ? '+' : ''}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credits;
