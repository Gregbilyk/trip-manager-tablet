import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface GroupChatProps {
  onClose: () => void;
  tripName: string;
}

const GroupChat: React.FC<GroupChatProps> = ({ onClose, tripName }) => {
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, user: 'Sarah', message: 'Just booked the sushi class. So excited.',          time: '2:30 PM', avatar: 'S', you: false },
    { id: 2, user: 'Mike',  message: 'Should we meet at the hotel lobby at 8 AM for Mt. Fuji?', time: '2:45 PM', avatar: 'M', you: false },
    { id: 3, user: 'You',   message: "Sounds perfect. I'll bring the portable chargers.",   time: '2:47 PM', avatar: 'Y', you: true  },
    { id: 4, user: 'Lisa',  message: 'Download the Tokyo Metro app before we land.',        time: '3:15 PM', avatar: 'L', you: false },
  ];

  const handleSend = () => {
    if (message.trim()) setMessage('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(8, 18, 30, 0.74)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="w-full max-w-2xl flex flex-col"
        style={{
          background: 'var(--cobalt-surface)',
          border: '1px solid var(--copper-line)',
          borderRadius: 'var(--r-card)',
          boxShadow: 'var(--shadow-soft-lg)',
          height: 580,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid var(--cobalt-line)' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 4 }}>
              Group Chat
            </p>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 18, color: 'var(--ivory)' }}>
              {tripName}
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.10em', color: 'var(--steel)', marginTop: 2 }}>
              4 members
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close group chat"
            className="flex items-center justify-center w-9 h-9 rounded transition-all duration-200"
            style={{
              background: 'var(--cobalt-elevated)',
              border: '1px solid var(--cobalt-line)',
              borderRadius: 'var(--r-card)',
              color: 'var(--steel)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--copper)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--copper)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--cobalt-line)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--steel)';
            }}
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-6 py-5 space-y-4"
          style={{ background: 'var(--cobalt-deep)' }}
        >
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.you ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-sm ${msg.you ? 'flex-row-reverse' : ''}`}>
                {/* Avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0"
                  style={{
                    background: msg.you ? 'var(--copper)' : 'var(--cobalt-elevated)',
                    border: `1px solid ${msg.you ? 'var(--copper)' : 'var(--cobalt-line)'}`,
                    color: msg.you ? 'var(--cobalt-deep)' : 'var(--steel)',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 500,
                  }}
                >
                  {msg.avatar}
                </div>
                {/* Bubble */}
                <div>
                  {!msg.you && (
                    <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 10.5, letterSpacing: '0.12em', color: 'var(--steel)', marginBottom: 3 }}>
                      {msg.user}
                    </p>
                  )}
                  <div
                    className="px-4 py-2.5"
                    style={{
                      background: msg.you ? 'var(--copper-soft)' : 'var(--cobalt-surface)',
                      border: `1px solid ${msg.you ? 'var(--copper-line)' : 'var(--cobalt-line)'}`,
                      borderRadius: 'var(--r-card)',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ivory)', lineHeight: 1.6 }}>
                      {msg.message}
                    </p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 10.5, letterSpacing: '0.10em', color: 'var(--steel)', marginTop: 3, textAlign: msg.you ? 'right' : 'left' }}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          className="px-6 py-4"
          style={{ borderTop: '1px solid var(--cobalt-line)' }}
        >
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Write a message..."
              className="flex-1 px-4 py-2.5 outline-none"
              style={{
                background: 'var(--cobalt-deep)',
                border: '1px solid var(--cobalt-line)',
                borderRadius: 'var(--r-input)',
                color: 'var(--ivory)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
              }}
            />
            <button
              onClick={handleSend}
              className="flex items-center justify-center w-10 h-10 btn-copper shrink-0"
              style={{ borderRadius: 'var(--r-card)', width: 40, height: 40 }}
            >
              <Send size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
