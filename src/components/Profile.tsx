import React from 'react';
import { User, MapPin, Calendar, Award, Settings, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const userStats = [
    { label: 'Total Trips',        value: '24',  icon: MapPin    },
    { label: 'Countries Visited',  value: '12',  icon: Award     },
    { label: 'Days Traveled',      value: '156', icon: Calendar  },
    { label: 'Trees Planted',      value: '38',  icon: Award     },
  ];

  const recentTrips = [
    { destination: 'Tokyo, Japan',      date: 'March 2024',    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop' },
    { destination: 'Paris, France',     date: 'January 2024',  image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=100&h=100&fit=crop' },
    { destination: 'Bali, Indonesia',   date: 'November 2023', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="space-y-10">

      {/* ── Page header ── */}
      <div>
        <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--copper)' }}>
          Your account
        </p>
        <div className="rule-gold mt-2 mb-2" />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ivory)' }}>
          Profile
        </h1>
      </div>

      {/* ── Profile card ── */}
      <div
        className="p-8 rounded-lg"
        style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft)' }}
      >
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'var(--cobalt-elevated)', border: '2px solid var(--copper-line)' }}
            >
              <User size={32} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
            </div>
            {/* Verified dot */}
            <div
              className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: 'var(--verdigris)', border: '2px solid var(--cobalt-surface)' }}
            >
              <span style={{ color: 'var(--cobalt-deep)', fontSize: 10, fontWeight: 700 }}>✓</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 22, color: 'var(--ivory)', marginBottom: 4 }}>
              Sarah Johnson
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 14, marginBottom: 8 }}>
              Explorer and adventure seeker.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { icon: Mail,  text: 'sarah.johnson@email.com' },
                { icon: Phone, text: '+1 (555) 123-4567'       },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Icon size={13} strokeWidth={1.5} style={{ color: 'var(--steel)' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.04em', color: 'var(--steel)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Edit button */}
          <button
            className="btn-ivory flex items-center gap-2 px-4 py-2 text-sm shrink-0"
          >
            <Settings size={14} strokeWidth={1.5} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="concierge-card p-6 text-center"
            >
              <Icon size={24} strokeWidth={1.5} style={{ color: 'var(--copper)', margin: '0 auto 12px' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 32, lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ivory)', marginBottom: 4 }}>
                {s.value}
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                {s.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Recent Adventures ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Recent Adventures
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div
          className="overflow-hidden rounded-lg"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft)' }}
        >
          {recentTrips.map((trip, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-4 transition-colors"
              style={{
                borderBottom: i < recentTrips.length - 1 ? '1px solid var(--cobalt-line)' : undefined,
              }}
            >
              <div className="relative w-11 h-11 rounded overflow-hidden shrink-0" style={{ borderRadius: 'var(--r-card)' }}>
                <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'var(--cool-overlay)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)' }}>
                  {trip.destination}
                </p>
                <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.10em', color: 'var(--steel)' }}>
                  {trip.date}
                </p>
              </div>
              <button style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.10em', color: 'var(--copper)', textTransform: 'uppercase' }}>
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Travel Preferences ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Travel Preferences
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div
          className="p-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', borderRadius: 'var(--r-card)' }}
        >
          {[
            { label: 'Preferred Travel Style', options: ['Adventure & Exploration', 'Luxury & Comfort', 'Budget-Friendly', 'Cultural Immersion'] },
            { label: 'Notification Preferences', options: ['All Notifications', 'Important Only', 'Minimal', 'Off'] },
          ].map((field, i) => (
            <div key={i}>
              <label
                style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--steel)', display: 'block', marginBottom: 8 }}
              >
                {field.label}
              </label>
              <select
                className="w-full p-3 text-sm"
                style={{
                  background: 'var(--cobalt-elevated)',
                  border: '1px solid var(--cobalt-line)',
                  borderRadius: 'var(--r-input)',
                  color: 'var(--ivory)',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 300,
                  fontSize: 13,
                  outline: 'none',
                }}
              >
                {field.options.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
