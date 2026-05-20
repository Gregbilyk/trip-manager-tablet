import React, { useState } from 'react';
import { Plus, Check, Calendar, MapPin, Clock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TripSectionProps {
  section: {
    id:    string;
    title: string;
    icon:  React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
    color: string;
    items: string[];
  };
}

const TripSection: React.FC<TripSectionProps> = ({ section }) => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const Icon = section.icon;

  const toggleItem = (index: number) => {
    const next = new Set(checkedItems);
    next.has(index) ? next.delete(index) : next.add(index);
    setCheckedItems(next);
  };

  // Itinerary data
  const itineraryData = [
    {
      day: 1, date: 'March 15, 2024', title: 'Arrival & Shibuya',
      activities: [
        { time: '10:00 AM', activity: 'Arrive at Narita Airport',  location: 'Narita International Airport' },
        { time: '12:30 PM', activity: 'Check into hotel',          location: 'Shibuya District'             },
        { time: '2:00 PM',  activity: 'Lunch at local ramen shop', location: 'Shibuya'                      },
        { time: '4:00 PM',  activity: 'Explore Shibuya Crossing',  location: 'Shibuya Crossing'             },
        { time: '7:00 PM',  activity: 'Dinner at izakaya',         location: 'Shibuya'                      },
      ],
    },
    {
      day: 2, date: 'March 16, 2024', title: 'Senso-ji & Asakusa',
      activities: [
        { time: '9:00 AM',  activity: 'Visit Senso-ji Temple',       location: 'Asakusa'       },
        { time: '11:00 AM', activity: 'Shopping at Nakamise Street', location: 'Asakusa'       },
        { time: '1:00 PM',  activity: 'Traditional lunch',           location: 'Asakusa'       },
        { time: '3:00 PM',  activity: 'Tokyo Skytree visit',         location: 'Sumida'        },
        { time: '6:00 PM',  activity: 'River cruise',                location: 'Sumida River'  },
      ],
    },
    {
      day: 3, date: 'March 17, 2024', title: 'Mt. Fuji Day Trip',
      activities: [
        { time: '7:00 AM',  activity: 'Depart for Mt. Fuji',      location: 'Shinjuku Station' },
        { time: '10:00 AM', activity: 'Lake Kawaguchi',           location: 'Fujikawaguchiko'  },
        { time: '12:00 PM', activity: 'Lunch with Mt. Fuji view', location: 'Kawaguchiko'      },
        { time: '2:00 PM',  activity: 'Chureito Pagoda',          location: 'Fujiyoshida'      },
        { time: '8:00 PM',  activity: 'Return to Tokyo',          location: 'Tokyo'            },
      ],
    },
  ];

  const renderItineraryModal = () => (
    <div className="mt-2 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
      {itineraryData.map(day => (
        <div
          key={day.day}
          className="overflow-hidden"
          style={{ background: 'var(--cobalt-deep)', border: '1px solid var(--cobalt-line)', borderRadius: 'var(--r-card)' }}
        >
          {/* Day header */}
          <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--cobalt-line)' }}>
            <Calendar size={15} strokeWidth={1.5} style={{ color: 'var(--copper)', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)' }}>
                Day {day.day}: {day.title}
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.10em', color: 'var(--steel)' }}>
                {day.date}
              </p>
            </div>
          </div>
          {/* Activities */}
          {day.activities.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-5 py-3"
              style={{ borderBottom: i < day.activities.length - 1 ? '1px solid var(--cobalt-line)' : undefined }}
            >
              <div className="flex items-center gap-1.5 min-w-[88px]">
                <Clock size={11} strokeWidth={1.5} style={{ color: 'var(--steel)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.06em', color: 'var(--steel)' }}>
                  {a.time}
                </span>
              </div>
              <div className="flex-1">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ivory)', marginBottom: 2 }}>
                  {a.activity}
                </p>
                <div className="flex items-center gap-1">
                  <MapPin size={10} strokeWidth={1.5} style={{ color: 'var(--steel)' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, color: 'var(--steel)' }}>
                    {a.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderRegularModal = () => (
    <div className="mt-2 space-y-1 max-h-[55vh] overflow-y-auto pr-1">
      {section.items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-3 py-3 rounded transition-colors"
          style={{ borderRadius: 'var(--r-card)' }}
        >
          {section.id === 'packing' ? (
            <button
              onClick={e => { e.stopPropagation(); toggleItem(i); }}
              className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors"
              style={{
                border: `1px solid ${checkedItems.has(i) ? 'var(--verdigris)' : 'var(--cobalt-line)'}`,
                background: checkedItems.has(i) ? 'var(--verdigris)' : 'transparent',
              }}
            >
              {checkedItems.has(i) && <Check size={10} strokeWidth={2.5} style={{ color: 'var(--cobalt-deep)' }} />}
            </button>
          ) : (
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: 'var(--copper)', marginLeft: 2 }}
            />
          )}
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: checkedItems.has(i) && section.id === 'packing' ? 'var(--steel)' : 'var(--ivory)',
              textDecoration: checkedItems.has(i) && section.id === 'packing' ? 'line-through' : undefined,
              opacity: checkedItems.has(i) && section.id === 'packing' ? 0.5 : 1,
              lineHeight: 1.5,
            }}
          >
            {item}
          </span>
        </div>
      ))}

      <button
        className="flex items-center gap-2 px-3 py-3 w-full transition-colors"
        style={{ color: 'var(--steel)', fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 12, letterSpacing: '0.10em' }}
      >
        <Plus size={13} strokeWidth={1.5} />
        Add item
      </button>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="concierge-card p-5 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon size={17} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
              <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 14, color: 'var(--ivory)' }}>
                {section.title}
              </h3>
            </div>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 11, letterSpacing: '0.12em', color: 'var(--steel)' }}>
              {section.id === 'itinerary' ? '3 days' : `${section.items.length} items`}
            </span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="max-w-2xl max-h-[85vh] overflow-y-auto"
        style={{ background: 'var(--cobalt-surface)', border: '1px solid var(--copper-line)', borderRadius: 'var(--r-card)' }}
      >
        <DialogHeader>
          <DialogTitle
            className="flex items-center gap-3"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 500, fontSize: 18, color: 'var(--ivory)' }}
          >
            <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--copper)' }} />
            {section.title}
          </DialogTitle>
        </DialogHeader>

        {section.id === 'itinerary' ? renderItineraryModal() : renderRegularModal()}
      </DialogContent>
    </Dialog>
  );
};

export default TripSection;
