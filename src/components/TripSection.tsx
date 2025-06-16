
import React, { useState } from 'react';
import { ChevronDown, Plus, Check } from 'lucide-react';

interface TripSectionProps {
  section: {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    color: string;
    items: string[];
  };
}

const TripSection: React.FC<TripSectionProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  
  const Icon = section.icon;
  
  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-200 bg-blue-50',
      yellow: 'border-yellow-200 bg-yellow-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
      red: 'border-red-200 bg-red-50',
      teal: 'border-teal-200 bg-teal-50'
    };
    return colorMap[color] || 'border-gray-200 bg-gray-50';
  };

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'text-blue-600',
      yellow: 'text-yellow-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      teal: 'text-teal-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div className={`rounded-xl border-2 ${getColorClasses(section.color)} p-6 hover:shadow-lg transition-all duration-200`}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <Icon className={`${getIconColor(section.color)}`} size={24} />
          <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
        </div>
        <ChevronDown 
          className={`text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-2 animate-fade-in">
          {section.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
              {section.id === 'packing' ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(index);
                  }}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    checkedItems.has(index) 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300'
                  }`}
                >
                  {checkedItems.has(index) && <Check size={12} />}
                </button>
              ) : (
                <div className={`w-2 h-2 rounded-full bg-${section.color}-400`}></div>
              )}
              <span className={`text-gray-700 ${checkedItems.has(index) && section.id === 'packing' ? 'line-through opacity-60' : ''}`}>
                {item}
              </span>
            </div>
          ))}
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 mt-3 transition-colors">
            <Plus size={16} />
            <span className="text-sm">Add item</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TripSection;
