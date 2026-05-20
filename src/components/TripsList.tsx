import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface TripsListProps {
  onAmbient?: (key: string | null) => void;
}

const TripsList: React.FC<TripsListProps> = ({ onAmbient }) => {
  const trips = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      title: 'Tokyo',
      country: 'Japan',
      dates: 'Mar 15 – 22, 2024',
      status: 'current',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
      participants: 4,
      daysLeft: 5,
      duration: 7,
      price: '¥ 248,000',
      ambient: 'tokyo',
    },
    {
      id: 2,
      destination: 'Paris, France',
      title: 'Paris',
      country: 'France',
      dates: 'Jan 10 – 17, 2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop',
      participants: 2,
      daysLeft: null,
      duration: 7,
      price: '€ 3,200',
      ambient: 'paris',
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      title: 'Bali',
      country: 'Indonesia',
      dates: 'May 20 – 30, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop',
      participants: 6,
      daysLeft: 65,
      duration: 10,
      price: 'Rp 28,000,000',
      ambient: 'bali',
    },
    {
      id: 4,
      destination: 'New York, USA',
      title: 'New York',
      country: 'USA',
      dates: 'Dec 5 – 12, 2023',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
      participants: 3,
      daysLeft: null,
      duration: 7,
      price: '$ 4,800',
      ambient: 'new-york',
    },
    {
      id: 5,
      destination: 'London, UK',
      title: 'London',
      country: 'United Kingdom',
      dates: 'Apr 8 – 15, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
      participants: 2,
      daysLeft: 23,
      duration: 7,
      price: '£ 2,900',
      ambient: 'london',
    },
  ];

  const getStatusBadge = (status: string, daysLeft: number | null) => {
    if (status === 'current') {
      return <span className="badge-active">Current</span>;
    }
    if (status === 'completed') {
      return <span className="badge-completed">Completed</span>;
    }
    if (daysLeft !== null && daysLeft <= 7) {
      return <span className="badge-warning">Starting Soon</span>;
    }
    return <span className="badge-upcoming">Upcoming</span>;
  };

  const currentTrips   = trips.filter(t => t.status === 'current');
  const upcomingTrips  = trips.filter(t => t.status === 'upcoming');
  const completedTrips = trips.filter(t => t.status === 'completed');

  const TripCard = ({ trip }: { trip: typeof trips[0] }) => (
    <article
      key={trip.id}
      className="concierge-trip-card concierge-card overflow-hidden cursor-pointer"
      onMouseEnter={() => onAmbient?.(trip.ambient)}
      onMouseLeave={() => onAmbient?.(null)}
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="card-photo-inner w-full h-full object-cover"
        />
        {/* Cool overlay */}
        <div className="absolute inset-0" style={{ background: 'var(--cool-overlay)' }} />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--cobalt-surface) 0%, transparent 55%)' }}
        />
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          {getStatusBadge(trip.status, trip.daysLeft)}
        </div>
        {/* Countdown */}
        {trip.daysLeft !== null && (
          <div className="absolute bottom-4 left-4">
            <span className="countdown-pill">{trip.daysLeft} days to go</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Kicker */}
        <p
          className="mb-1"
          style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: 10.5,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--steel)',
          }}
        >
          {trip.dates} · {trip.country}
        </p>

        {/* Title */}
        <h3
          className="mb-2"
          style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 500,
            fontSize: 20,
            color: 'var(--ivory)',
            lineHeight: 1.2,
          }}
        >
          {trip.title}
        </h3>

        {/* Copper rule — grows on hover via CSS */}
        <span className="card-rule mb-3" />

        {/* Meta */}
        <div
          className="flex items-center justify-between"
          style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--steel)' }}
        >
          <span className="flex items-center gap-1.5">
            <Users size={13} strokeWidth={1.5} />
            {trip.participants} travelers · {trip.duration} nights
          </span>
          <span style={{ color: 'var(--ivory)', letterSpacing: '0.04em' }}>{trip.price}</span>
        </div>
      </div>
    </article>
  );

  const Section = ({
    title,
    trips: sectionTrips,
    empty,
  }: {
    title: string;
    trips: typeof trips;
    empty: string;
  }) => (
    <div className="mb-12">
      {/* Section header */}
      <div className="mb-5">
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
          Your library
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
          {title}
        </h2>
      </div>

      {sectionTrips.length === 0 ? (
        <div
          className="py-12 text-center"
          style={{
            background: 'var(--cobalt-surface)',
            border: '1px solid var(--cobalt-line)',
            borderRadius: 'var(--r-card)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 15 }}>
            {empty}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sectionTrips.map(t => <TripCard key={t.id} trip={t} />)}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Page header */}
      <div className="mb-10">
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
          }}
        >
          All Trips
        </p>
        <div className="rule-gold mt-2 mb-2" />
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            color: 'var(--ivory)',
          }}
        >
          Every journey, kept.
        </h1>
        <p
          className="mt-3 max-w-lg"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 15, lineHeight: 1.7 }}
        >
          Past, present, planned. Hover a card and the room around you will quietly shift to match the place.
        </p>
      </div>

      <Section title="Current Trip"    trips={currentTrips}   empty="No current trips." />
      <Section title="Upcoming Trips"  trips={upcomingTrips}  empty="No upcoming trips planned. When you find a place worth the journey, we will keep it here for you." />
      <Section title="Completed Trips" trips={completedTrips} empty="No completed trips." />

      {/* CTA */}
      <div className="mt-4 mb-8">
        <button className="btn-copper px-8 py-3 text-sm">
          Plan a New Journey
        </button>
      </div>
    </div>
  );
};

export default TripsList;
