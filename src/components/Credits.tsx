import React from 'react';
import { Activity, Gift, CreditCard, Star, Calendar, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const Credits = () => {
  const creditHistory = [
    { id: 1, action: 'Trip Completion Bonus',   amount: 500,  date: 'January 15, 2024', type: 'earned' },
    { id: 2, action: 'Referral Bonus',          amount: 250,  date: 'January 10, 2024', type: 'earned' },
    { id: 3, action: 'Hotel Booking Discount',  amount: -150, date: 'January 8, 2024',  type: 'used'   },
    { id: 4, action: 'Sustainability Bonus',    amount: 100,  date: 'January 5, 2024',  type: 'earned' },
    { id: 5, action: 'Flight Upgrade',          amount: -300, date: 'December 20, 2023',type: 'used'   },
  ];

  const rewardOptions = [
    { title: 'Flight Upgrade',       cost: 1000, description: 'Upgrade to business class',          icon: CreditCard },
    { title: 'Hotel Discount',       cost: 500,  description: '20% off your next stay',             icon: Gift       },
    { title: 'Airport Lounge',       cost: 750,  description: 'Access to premium lounges',          icon: Star       },
    { title: 'Travel Insurance',     cost: 300,  description: 'Free coverage for your next journey',icon: Activity   },
  ];

  const earningMethods = [
    { title: 'Complete Journeys',   desc: 'Earn 500 credits per completed trip', icon: Calendar, color: 'var(--verdigris)' },
    { title: 'Refer Friends',       desc: 'Get 250 credits per introduction',    icon: Gift,     color: 'var(--copper)'    },
    { title: 'Leave Reviews',       desc: '50 credits per honest reflection',    icon: Star,     color: 'var(--mustard)'   },
    { title: 'Sustainable Travel',  desc: 'Bonus credits for eco choices',       icon: Activity, color: 'var(--verdigris)' },
  ];

  return (
    <div className="space-y-10">

      {/* ── Page header ── */}
      <div>
        <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--copper)' }}>
          The ledger
        </p>
        <div className="rule-gold mt-2 mb-2" />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ivory)' }}>
          Travel Credits
        </h1>
        <p className="mt-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 15, lineHeight: 1.7 }}>
          Earn and redeem credits across every journey.
        </p>
      </div>

      {/* ── Balance panel — Cobalt Deep ── */}
      <div
        className="p-8 rounded-lg"
        style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft-lg)' }}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--steel)' }}>
              Available Credits
            </p>
            <div className="rule-gold my-3" />
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(48px, 6vw, 80px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'var(--ivory)',
              }}
            >
              2,450
            </p>
            <p className="mt-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--steel)', fontSize: 14 }}>
              550 more to your next reward.
            </p>
          </div>
          <div className="text-right shrink-0">
            <Activity size={40} strokeWidth={1} style={{ color: 'var(--copper)', opacity: 0.5 }} />
            <div
              className="mt-4 px-4 py-2 rounded-lg"
              style={{ background: 'var(--copper-soft)', border: '1px solid var(--copper-line)' }}
            >
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.16em', color: 'var(--copper)' }}>
                Gold Member
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── How to Earn ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            How to Earn
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {earningMethods.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg"
                style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', borderRadius: 'var(--r-card)' }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ background: 'var(--cobalt-elevated)', borderRadius: 'var(--r-input)', border: '1px solid var(--cobalt-line)' }}
                >
                  <Icon size={18} strokeWidth={1.5} style={{ color: m.color }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)' }}>
                    {m.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--steel)', lineHeight: 1.5 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Redeem Rewards ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Redeem Rewards
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {rewardOptions.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="concierge-card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={20} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 15, color: 'var(--ivory)' }}>
                        {r.title}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--steel)', lineHeight: 1.5 }}>
                        {r.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 22, color: 'var(--copper)', letterSpacing: '-0.01em' }}>
                      {r.cost.toLocaleString()}
                    </p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                      credits
                    </p>
                  </div>
                </div>
                <button className="btn-copper w-full py-2.5 text-sm">
                  Redeem
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Credit History Ledger ── */}
      <div>
        <div className="mb-5">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 20, color: 'var(--ivory)' }}>
            Recent Activity
          </h2>
          <div className="rule-gold mt-2" />
        </div>
        <div
          className="overflow-hidden rounded-lg"
          style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--cobalt-line)', boxShadow: 'var(--shadow-soft)' }}
        >
          {creditHistory.map((t, i) => (
            <div
              key={t.id}
              className="flex items-center justify-between px-6 py-4 transition-colors"
              style={{ borderBottom: i < creditHistory.length - 1 ? '1px solid var(--cobalt-line)' : undefined }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                  style={{
                    background: t.type === 'earned' ? 'var(--verdigris-soft)' : 'var(--oxblood-soft)',
                    borderRadius: 'var(--r-input)',
                  }}
                >
                  {t.type === 'earned'
                    ? <ArrowUpRight size={14} strokeWidth={1.5} style={{ color: 'var(--verdigris)' }} />
                    : <ArrowDownLeft size={14} strokeWidth={1.5} style={{ color: 'var(--oxblood)' }} />
                  }
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ivory)' }}>
                    {t.action}
                  </p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.10em', color: 'var(--steel)' }}>
                    {t.date}
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 300,
                  fontSize: 16,
                  letterSpacing: '-0.01em',
                  color: t.type === 'earned' ? 'var(--verdigris)' : 'var(--oxblood)',
                }}
              >
                {t.type === 'earned' ? '+' : ''}{t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credits;
