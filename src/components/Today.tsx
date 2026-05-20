import React, { useState } from 'react';
import { Bell, Star, Clock, Plane, MapPin, AlertCircle, Calendar, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Today = () => {
  const [showItinerary, setShowItinerary] = useState(false);
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const itineraryData = [
    {
      day: 1,
      date: 'March 15, 2024',
      title: 'Arrival & Shibuya',
      activities: [
        { time: '10:00 AM', activity: 'Arrive at Narita Airport',    location: 'Narita International Airport' },
        { time: '12:30 PM', activity: 'Check into hotel',            location: 'Shibuya District' },
        { time: '2:00 PM',  activity: 'Lunch at local ramen shop',   location: 'Shibuya' },
        { time: '4:00 PM',  activity: 'Explore Shibuya Crossing',    location: 'Shibuya Crossing' },
        { time: '7:00 PM',  activity: 'Dinner at izakaya',           location: 'Shibuya' },
      ],
    },
    {
      day: 2,
      date: 'March 16, 2024',
      title: 'Senso-ji & Asakusa',
      activities: [
        { time: '9:00 AM',  activity: 'Visit Senso-ji Temple',       location: 'Asakusa' },
        { time: '11:00 AM', activity: 'Shopping at Nakamise Street', location: 'Asakusa' },
        { time: '1:00 PM',  activity: 'Traditional lunch',           location: 'Asakusa' },
        { time: '3:00 PM',  activity: 'Tokyo Skytree visit',         location: 'Sumida' },
        { time: '6:00 PM',  activity: 'River cruise',                location: 'Sumida River' },
      ],
    },
    {
      day: 3,
      date: 'March 17, 2024',
      title: 'Mt. Fuji Day Trip',
      activities: [
        { time: '7:00 AM',  activity: 'Depart for Mt. Fuji',         location: 'Shinjuku Station' },
        { time: '10:00 AM', activity: 'Lake Kawaguchi',              location: 'Fujikawaguchiko' },
        { time: '12:00 PM', activity: 'Lunch with Mt. Fuji view',    location: 'Kawaguchiko' },
        { time: '2:00 PM',  activity: 'Chureito Pagoda',             location: 'Fujiyoshida' },
        { time: '8:00 PM',  activity: 'Return to Tokyo',             location: 'Tokyo' },
      ],
    },
  ];

  // priority → badge class and notification row style
  const priorityConfig = {
    high:   { badge: 'badge-active',   border: 'var(--copper-line)',   bg: 'var(--copper-soft)',   icon: 'var(--copper)'   },
    medium: { badge: 'badge-warning',  border: 'var(--mustard-line)',  bg: 'var(--mustard-soft)',  icon: 'var(--mustard)'  },
    low:    { badge: 'badge-upcoming', border: 'rgba(156,181,201,0.28)', bg: 'rgba(156,181,201,0.06)', icon: 'var(--steel)' },
  } as const;

  const notifications = [
    { id: 1, title: 'Flight Check-in Available',  message: 'Check-in for your Narita flight opens in two hours.', time: '2 hours',  priority: 'high'   as const, icon: Plane       },
    { id: 2, title: 'Weather Notice',             message: 'The forecast for your second morning in Asakusa: a cool 12°. Pack a layer.', time: '4 hours', priority: 'medium' as const, icon: AlertCircle },
    { id: 3, title: 'Reservation Reminder',       message: 'Your table at Sukiyabashi Jiro is confirmed for tomorrow at 7 PM.', time: '6 hours', priority: 'medium' as const, icon: MapPin       },
    { id: 4, title: 'Offline Maps Ready',         message: 'Your Tokyo maps are downloaded and available offline.', time: '1 day',   priority: 'low'    as const, icon: Star         },
  ];

  const upcomingTasks = [
    { task: 'Complete online check-in',  time: 'In 2 hours',    urgent: true  },
    { task: 'Download offline maps',     time: 'Before departure', urgent: false },
    { task: 'Confirm hotel booking',     time: 'Today',         urgent: true  },
    { task: 'Arrange travel insurance',  time: 'Before trip',   urgent: false },
  ];

  const toggleCheck = (i: number) => {
    const next = new Set(checked);
    next.has(i) ? next.delete(i) : next.add(i);
    setChecked(next);
  };

  return (
    <div className="space-y-10">

      {/* ── Page header ── */}
      <div className="flex items-start justify-between">
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--copper)' }}>
            Today
          </p>
          <div className="rule-gold mt-2 mb-2" />
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ivory)' }}>
            Stay Updated.
          </h1>
        </div>
        <div
          className="flex items-center gap-2 mt-1"
          style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.10em', color: 'var(--steel)' }}
        >
          <Clock size={14} strokeWidth={1.5} />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* ── Notifications ── */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Bell size={16} strokeWidth={1.5} style={{ color: 'var(--steel)' }} />
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 18, color: 'var(--ivory)' }}>
            Notifications
          </h2>
        </div>
        <div className="space-y-3">
          {notifications.map(n => {
            const cfg = priorityConfig[n.priority];
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className="flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200"
                style={{
                  background: cfg.bg,
                  border: `1px solid ${cfg.border}`,
                  borderRadius: 'var(--r-card)',
                }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center"
                  style={{ background: 'var(--cobalt-surface)', borderRadius: 'var(--r-card)' }}
                >
                  <Icon size={16} strokeWidth={1.5} style={{ color: cfg.icon }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)' }}>
                      {n.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--steel)' }}>
                      {n.time} ago
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--steel)', lineHeight: 1.6 }}>
                    {n.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Today's Tasks ── */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Clock size={16} strokeWidth={1.5} style={{ color: 'var(--steel)' }} />
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 18, color: 'var(--ivory)' }}>
            Today's Tasks
          </h2>
        </div>
        <div
          className="rounded-lg overflow-hidden"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft)' }}
        >
          {upcomingTasks.map((task, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-4 transition-colors"
              style={{
                borderBottom: i < upcomingTasks.length - 1 ? '1px solid var(--cobalt-line)' : undefined,
                background: task.urgent ? 'var(--copper-soft)' : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleCheck(i)}
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    border: `1px solid ${checked.has(i) ? 'var(--verdigris)' : 'var(--cobalt-line)'}`,
                    background: checked.has(i) ? 'var(--verdigris)' : 'transparent',
                  }}
                >
                  {checked.has(i) && <Check size={10} style={{ color: 'var(--cobalt-deep)' }} strokeWidth={2.5} />}
                </button>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: checked.has(i) ? 'var(--steel)' : task.urgent ? 'var(--ivory)' : 'var(--ivory)',
                    textDecoration: checked.has(i) ? 'line-through' : undefined,
                    opacity: checked.has(i) ? 0.5 : 1,
                  }}
                >
                  {task.task}
                </span>
              </div>
              <span
                className={`${task.urgent ? 'badge-active' : 'badge-upcoming'}`}
                style={{ flexShrink: 0 }}
              >
                {task.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Actions ── */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 18, color: 'var(--ivory)', marginBottom: 16 }}>
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Check Flight Status', icon: Plane,      style: { bg: 'var(--copper)',   text: 'var(--cobalt-deep)' } },
            { label: 'View Itinerary',      icon: MapPin,     style: { bg: 'var(--verdigris)', text: 'var(--cobalt-deep)' }, action: () => setShowItinerary(true) },
            { label: 'Notifications',       icon: Bell,       style: { bg: 'var(--cobalt-surface)', text: 'var(--ivory)' } },
            { label: 'Rate Experience',     icon: Star,       style: { bg: 'var(--cobalt-surface)', text: 'var(--ivory)' } },
          ].map((btn, i) => {
            const Icon = btn.icon;
            return (
              <button
                key={i}
                onClick={btn.action}
                className="p-4 rounded-lg flex flex-col items-center gap-2 transition-all duration-200"
                style={{
                  background: btn.style.bg,
                  borderRadius: 'var(--r-card)',
                  border: btn.style.bg.includes('surface') ? '1px solid var(--cobalt-line)' : undefined,
                  fontFamily: 'var(--font-ui)',
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  color: btn.style.text,
                  fontWeight: 400,
                }}
              >
                <Icon size={22} strokeWidth={1.5} />
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Concierge pull-quote */}
      <div
        className="px-8 py-8 rounded-lg"
        style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            lineHeight: 1.4,
            color: 'var(--ivory)',
          }}
        >
          "It felt less like an app and more like a concierge who already knew what we wanted."
        </p>
        <div className="rule-gold mt-4 mb-2" />
        <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--steel)' }}>
          Camille R. · 14 trips
        </p>
      </div>

      {/* Itinerary Modal */}
      <Dialog open={showItinerary} onOpenChange={setShowItinerary}>
        <DialogContent
          className="max-w-3xl max-h-[80vh] overflow-y-auto"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--copper-line)', borderRadius: 'var(--r-card)' }}
        >
          <DialogHeader>
            <DialogTitle
              className="flex items-center gap-3"
              style={{ fontFamily: 'var(--font-headline)', color: 'var(--ivory)', fontWeight: 500 }}
            >
              <Calendar size={20} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
              Itinerary
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 space-y-4">
            {itineraryData.map(day => (
              <div
                key={day.day}
                className="overflow-hidden"
                style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)', borderRadius: 'var(--r-card)' }}
              >
                {/* Day header */}
                <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--cobalt-line)' }}>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 15, color: 'var(--ivory)' }}>
                        Day {day.day}: {day.title}
                      </p>
                      <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.14em', color: 'var(--steel)' }}>
                        {day.date}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Activities */}
                {day.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 px-5 py-3 transition-colors hover:bg-cobalt-surface/30"
                    style={{ borderBottom: i < day.activities.length - 1 ? '1px solid var(--cobalt-line)' : undefined }}
                  >
                    <div className="flex items-center gap-2 min-w-[90px]">
                      <Clock size={12} strokeWidth={1.5} style={{ color: 'var(--steel)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.06em', color: 'var(--steel)' }}>
                        {activity.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ivory)', marginBottom: 2 }}>
                        {activity.activity}
                      </p>
                      <div className="flex items-center gap-1">
                        <MapPin size={11} strokeWidth={1.5} style={{ color: 'var(--steel)' }} />
                        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, color: 'var(--steel)' }}>
                          {activity.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Today;
