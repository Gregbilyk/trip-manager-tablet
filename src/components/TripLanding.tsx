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
  Book,
} from 'lucide-react';
import TripSection from './TripSection';
import GroupChat from './GroupChat';

const TripLanding = () => {
  const [showChat, setShowChat] = useState(false);

  const currentTrip = {
    destination: "Tokyo, Japan",
    dates: "March 15 – 22, 2024",
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop",
    tagline: "Cherry blossoms peak the week of your arrival.",
  };

  const sections = [
    { id: 'documents', title: 'Documents',       icon: FileText,    color: 'blue',   items: ['Flight Tickets', 'Hotel Confirmation', 'Passport Copy', 'Travel Insurance'] },
    { id: 'notes',     title: 'Important Notes', icon: StickyNote,  color: 'yellow', items: ['Cherry blossom season peak', 'Book restaurants early', 'Carry cash for temples', 'Download Google Translate'] },
    { id: 'visa',      title: 'Visa Information',icon: CreditCard,  color: 'green',  items: ['Tourist visa approved', 'Valid until April 30, 2024', 'Entry stamp required', 'Multiple entry allowed'] },
    { id: 'itinerary', title: 'Itinerary',        icon: Calendar,    color: 'purple', items: ['Day 1: Arrival & Shibuya', 'Day 2: Senso-ji & Asakusa', 'Day 3: Mt. Fuji day trip', 'Day 4: Harajuku & shopping'] },
    { id: 'activities',title: 'Activities',       icon: MapPin,      color: 'red',    items: ['Tokyo Skytree tickets', 'Sushi making class', 'Robot Restaurant show', 'Tsukiji fish market tour'] },
    { id: 'packing',   title: 'Packing List',     icon: CheckSquare, color: 'teal',   items: ['Comfortable walking shoes', 'Portable charger', 'Umbrella', 'Camera', 'Warm jacket'] },
  ];

  const utilities = [
    { id: 'emergency', title: 'Emergency Contacts', icon: Phone,       label: 'Emergency' },
    { id: 'currency',  title: 'Currency Converter', icon: DollarSign,  label: 'Currency'  },
    { id: 'weather',   title: 'Weather Forecast',   icon: Cloud,       label: 'Weather'   },
    { id: 'language',  title: 'Language Tips',      icon: Book,        label: 'Language'  },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden mb-10" style={{ borderRadius: 0 }}>
        <div className="h-80 lg:h-96 relative">
          <img
            src={currentTrip.image}
            alt={currentTrip.destination}
            className="w-full h-full object-cover"
          />
          {/* Cool cobalt overlay — required by brand */}
          <div
            className="absolute inset-0"
            style={{ background: 'var(--cool-overlay)' }}
          />
          {/* Bottom gradient into page background */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, var(--cobalt) 0%, rgba(15,34,53,0.6) 40%, transparent 80%)' }}
          />

          {/* Hero text — bottom-left */}
          <div className="absolute bottom-0 left-0 p-8 lg:p-10">
            {/* Kicker */}
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--copper)',
              }}
            >
              Current Trip
            </p>
            <div className="rule-gold mb-4" />
            <h1
              className="mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--ivory)',
              }}
            >
              {currentTrip.destination}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(245,239,224,0.75)',
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              {currentTrip.tagline}
            </p>
          </div>

          {/* Countdown pill — upper right */}
          <div className="absolute top-5 right-5">
            <span className="countdown-pill">
              {currentTrip.daysLeft} days to go
            </span>
          </div>

          {/* Dates — upper left metadata */}
          <div className="absolute top-5 left-8">
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245,239,224,0.70)',
              }}
            >
              {currentTrip.dates}
            </span>
          </div>
        </div>
      </div>

      {/* ── Action Buttons ── */}
      <div className="flex gap-3 mb-10 px-1">
        <button
          onClick={() => setShowChat(true)}
          className="btn-copper flex items-center gap-2 px-6 py-3 text-sm font-medium"
        >
          <MessageSquare size={16} strokeWidth={1.5} />
          Group Chat
        </button>
        <button className="btn-ivory flex items-center gap-2 px-6 py-3 text-sm">
          <Calendar size={16} strokeWidth={1.5} />
          Sync Calendar
        </button>
      </div>

      {/* ── Section title ── */}
      <div className="mb-6 px-1">
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--steel)',
          }}
        >
          Your trip
        </p>
        <div className="rule-gold mt-2 mb-1" />
        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 500,
            fontSize: 22,
            color: 'var(--ivory)',
          }}
        >
          What's Inside
        </h2>
      </div>

      {/* ── Sections Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
        {sections.map(section => (
          <TripSection key={section.id} section={section} />
        ))}
      </div>

      {/* ── Quick Tools ── */}
      <div>
        <div className="mb-6 px-1">
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--steel)',
            }}
          >
            On the ground
          </p>
          <div className="rule-gold mt-2 mb-1" />
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 500,
              fontSize: 22,
              color: 'var(--ivory)',
            }}
          >
            Quick Tools
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {utilities.map(u => {
            const Icon = u.icon;
            return (
              <button
                key={u.id}
                className="concierge-card flex flex-col items-center justify-center p-6 gap-3 cursor-pointer group"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: 'var(--steel)', transition: 'color var(--dur-quick) var(--ease-editorial)' }}
                  className="group-hover:text-copper"
                />
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 12,
                    letterSpacing: '0.10em',
                    color: 'var(--ivory)',
                    fontWeight: 400,
                  }}
                >
                  {u.title}
                </p>
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
