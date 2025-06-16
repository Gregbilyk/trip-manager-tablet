
import React from 'react';
import { Award, Leaf, Trophy, Users, TrendingUp } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Johnson', trees: 156, trips: 24, avatar: 'S', you: true },
    { rank: 2, name: 'Mike Chen', trees: 142, trips: 21, avatar: 'M', you: false },
    { rank: 3, name: 'Emma Davis', trees: 128, trips: 19, avatar: 'E', you: false },
    { rank: 4, name: 'Alex Rodriguez', trees: 115, trips: 17, avatar: 'A', you: false },
    { rank: 5, name: 'Lisa Thompson', trees: 98, trips: 15, avatar: 'L', you: false },
    { rank: 6, name: 'James Wilson', trees: 87, trips: 13, avatar: 'J', you: false },
    { rank: 7, name: 'Maria Garcia', trees: 75, trips: 12, avatar: 'M', you: false },
    { rank: 8, name: 'David Brown', trees: 68, trips: 11, avatar: 'D', you: false }
  ];

  const achievements = [
    { title: 'Eco Warrior', description: 'Plant 100+ trees', icon: Leaf, achieved: true },
    { title: 'Globe Trotter', description: 'Visit 20+ destinations', icon: Trophy, achieved: true },
    { title: 'Community Builder', description: 'Refer 10 friends', icon: Users, achieved: false },
    { title: 'Sustainability Champion', description: 'Plant 200+ trees', icon: Award, achieved: false }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-500" size={24} />;
      case 2:
        return <Award className="text-gray-400" size={24} />;
      case 3:
        return <Award className="text-orange-600" size={24} />;
      default:
        return <span className="text-gray-600 font-bold text-lg">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number, isYou: boolean) => {
    if (isYou) return 'bg-gradient-to-r from-blue-500 to-teal-500 text-white';
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800';
    if (rank === 3) return 'bg-gradient-to-r from-orange-400 to-orange-500 text-white';
    return 'bg-white border border-gray-200';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tree 4 Days</h1>
        <p className="text-gray-600">See how your eco-friendly travels compare with other adventurers</p>
      </div>

      {/* Your Stats */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Impact</h2>
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold">156</div>
                <div className="text-sm opacity-90">Trees Planted</div>
              </div>
              <div>
                <div className="text-3xl font-bold">#1</div>
                <div className="text-sm opacity-90">Current Rank</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24</div>
                <div className="text-sm opacity-90">Trips Completed</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Leaf size={64} className="opacity-50 mb-4" />
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">
                <TrendingUp size={16} className="inline mr-1" />
                +12 this month
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Achievements</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className={`p-4 rounded-xl border-2 ${
                achievement.achieved 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    achievement.achieved ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      achievement.achieved ? 'text-green-800' : 'text-gray-600'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.achieved ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.achieved && (
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Eco-Travelers</h3>
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div key={user.rank} className={`p-4 rounded-xl ${getRankBg(user.rank, user.you)} shadow-sm hover:shadow-md transition-all duration-200`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    user.you ? 'bg-white/20' : 'bg-gray-400'
                  }`}>
                    {user.avatar}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${user.you ? 'text-white' : 'text-gray-800'}`}>
                      {user.name} {user.you && '(You)'}
                    </h4>
                    <p className={`text-sm ${user.you ? 'text-white/80' : 'text-gray-600'}`}>
                      {user.trips} trips completed
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${user.you ? 'text-white' : 'text-green-600'}`}>
                    <Leaf size={20} />
                    <span className="text-2xl font-bold">{user.trees}</span>
                  </div>
                  <p className={`text-sm ${user.you ? 'text-white/80' : 'text-gray-500'}`}>trees planted</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How Trees are Calculated */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <Leaf className="text-green-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-green-800 mb-2">How We Calculate Trees</h3>
            <p className="text-green-700 text-sm mb-3">
              We partner with environmental organizations to plant trees based on your sustainable travel choices:
            </p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• 5 trees for choosing eco-certified accommodations</li>
              <li>• 3 trees for using public transportation</li>
              <li>• 2 trees for each completed sustainable activity</li>
              <li>• 1 tree for every review mentioning sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
