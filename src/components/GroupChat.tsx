
import React, { useState } from 'react';
import { X, Send, Smile } from 'lucide-react';

interface GroupChatProps {
  onClose: () => void;
  tripName: string;
}

const GroupChat: React.FC<GroupChatProps> = ({ onClose, tripName }) => {
  const [message, setMessage] = useState('');
  
  const messages = [
    { id: 1, user: 'Sarah', message: 'Just booked the sushi class! So excited!', time: '2:30 PM', avatar: 'S' },
    { id: 2, user: 'Mike', message: 'Should we meet at the hotel lobby at 8 AM for Mt. Fuji?', time: '2:45 PM', avatar: 'M' },
    { id: 3, user: 'You', message: 'Sounds perfect! I\'ll bring the portable chargers', time: '2:47 PM', avatar: 'Y' },
    { id: 4, user: 'Lisa', message: 'Don\'t forget to download the Tokyo Metro app!', time: '3:15 PM', avatar: 'L' }
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{tripName} Group</h2>
            <p className="text-gray-500 text-sm">4 members</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex space-x-3 max-w-xs ${msg.user === 'You' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                  msg.user === 'You' ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  {msg.avatar}
                </div>
                <div>
                  <div className={`rounded-2xl px-4 py-2 ${
                    msg.user === 'You' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Smile size={20} />
              </button>
            </div>
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
