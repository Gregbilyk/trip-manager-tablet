import React from 'react';
import { Award, Leaf, Trophy, Users, TrendingUp, Check } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Johnson', trees: 156, trips: 24, initial: 'S', you: true  },
    { rank: 2, name: 'Mike Chen',     trees: 142, trips: 21, initial: 'M', you: false },
    { rank: 3, name: 'Emma Davis',    trees: 128, trips: 19, initial: 'E', you: false },
    { rank: 4, name: 'Alex Rodriguez',trees: 115, trips: 17, initial: 'A', you: false },
    { rank: 5, name: 'Lisa Thompson', trees: 98,  trips: 15, initial: 'L', you: false },
    { rank: 6, name: 'James Wilson',  trees: 87,  trips: 13, initial: 'J', you: false },
    { rank: 7, name: 'Maria Garcia',  trees: 75,  trips: 12, initial: 'M', you: false },
    { rank: 8, name: 'David Brown',   trees: 68,  trips: 11, initial: 'D', you: false },
  ];

  const achievements = [
    { title: 'Eco Warrior',          description: 'Plant 100+ trees',      icon: Leaf,   achieved: true  },
    { title: 'Globe Trotter',        description: 'Visit 20+ destinations', icon: Trophy, achieved: true  },
    { title: 'Community Builder',    description: 'Refer 10 friends',       icon: Users,  achieved: false },
    { title: 'Sustainability Champion', description: 'Plant 200+ trees',   icon: Award,  achieved: false },
  ];

  const getRankLabel = (rank: number) => {
    if (rank === 1) return <Trophy size={18} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />;
    if (rank === 2) return <Award  size={18} strokeWidth={1.5} style={{ color: 'var(--steel)'  }} />;
    if (rank === 3) return <Award  size={18} strokeWidth={1.5} style={{ color: 'var(--mustard)'}} />;
    return (
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 13, letterSpacing: '0.06em', color: 'var(--steel)' }}>
        #{rank}
      </span>
    );
  };

  return (
    <div className="space-y-10">

      {/* ── Page header ── */}
      <div>
        <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--copper)' }}>
          The Society
        </p>
        <div className="rule-gold mt-2 mb-2" />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ivory)' }}>
          Tree 4 Days
        </h1>
        <p className="mt-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 15, lineHeight: 1.7 }}>
          See how your eco-friendly travels compare with fellow travelers.
        </p>
      </div>

      {/* ── Your Impact — Cobalt Deep panel ── */}
      <div
        className="p-8 rounded-lg"
        style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft-lg)' }}
      >
        <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--steel)' }}>
          Your impact
        </p>
        <div className="rule-gold my-3" />
        <div className="flex items-end justify-between gap-6">
          <div className="flex gap-10">
            {[
              { value: '156', label: 'Trees Planted' },
              { value: '#1',  label: 'Current Rank'  },
              { value: '24',  label: 'Trips Completed'},
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ivory)' }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--steel)', marginTop: 4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--verdigris)' }}>
            <TrendingUp size={16} strokeWidth={1.5} />
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.10em', color: 'var(--verdigris)' }}>
              +12 this month
            </span>
          </div>
        </div>
      </div>

      {/* ── Achievements ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Your Achievements
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg"
                style={{
                  background: a.achieved ? 'var(--verdigris-soft)' : 'var(--cobalt-surface)',
                  border: `1px solid ${a.achieved ? 'var(--verdigris-line)' : 'var(--cobalt-line)'}`,
                  borderRadius: 'var(--r-card)',
                }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ background: a.achieved ? 'var(--verdigris)' : 'var(--cobalt-elevated)', borderRadius: 'var(--r-input)' }}
                >
                  <Icon size={18} strokeWidth={1.5} style={{ color: a.achieved ? 'var(--cobalt-deep)' : 'var(--steel)' }} />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: a.achieved ? 'var(--ivory)' : 'var(--steel)' }}>
                    {a.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: a.achieved ? 'var(--verdigris)' : 'var(--steel)', lineHeight: 1.5 }}>
                    {a.description}
                  </p>
                </div>
                {a.achieved && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--verdigris)' }}
                  >
                    <Check size={12} strokeWidth={2.5} style={{ color: 'var(--cobalt-deep)' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Leaderboard table ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Top Eco-Travelers
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div
          className="overflow-hidden rounded-lg"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft)' }}
        >
          {leaderboardData.map((user, i) => (
            <div
              key={user.rank}
              className="flex items-center justify-between px-5 py-4 transition-all duration-200"
              style={{
                borderBottom: i < leaderboardData.length - 1 ? '1px solid var(--cobalt-line)' : undefined,
                background: user.you ? 'var(--copper-soft)' : undefined,
                borderLeft: user.you ? '2px solid var(--copper)' : '2px solid transparent',
              }}
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className="w-8 flex items-center justify-center">
                  {getRankLabel(user.rank)}
                </div>
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm shrink-0"
                  style={{
                    background: user.you ? 'var(--copper)' : 'var(--cobalt-elevated)',
                    color: user.you ? 'var(--cobalt-deep)' : 'var(--steel)',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 500,
                    border: `1px solid ${user.you ? 'var(--copper)' : 'var(--cobalt-line)'}`,
                  }}
                >
                  {user.initial}
                </div>
                {/* Name & trips */}
                <div>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: user.you ? 500 : 400, fontSize: 14, color: user.you ? 'var(--copper)' : 'var(--ivory)' }}>
                    {user.name}{user.you ? ' — You' : ''}
                  </p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.10em', color: 'var(--steel)' }}>
                    {user.trips} trips completed
                  </p>
                </div>
              </div>
              {/* Trees */}
              <div className="flex items-center gap-2">
                <Leaf size={16} strokeWidth={1.5} style={{ color: user.you ? 'var(--copper)' : 'var(--verdigris)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 300,
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: user.you ? 'var(--copper)' : 'var(--ivory)',
                  }}
                >
                  {user.trees}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div
        className="flex gap-3 p-5 rounded-lg"
        style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)' }}
      >
        <Leaf size={18} strokeWidth={1.5} style={{ color: 'var(--verdigris)', flexShrink: 0, marginTop: 2 }} />
        <div>
          <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)', marginBottom: 4 }}>
            How We Count Trees
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--steel)', lineHeight: 1.7 }}>
            We partner with environmental organizations to plant trees based on your sustainable travel choices — 5 trees for eco-certified stays, 3 for public transit, 2 per sustainable activity, 1 per sustainability review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
