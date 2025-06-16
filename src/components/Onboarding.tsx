
import React, { useState } from 'react';
import { ChevronRight, MapPin, Users, Leaf, Star, Plane } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userPreferences, setUserPreferences] = useState({
    travelStyle: '',
    interests: [] as string[],
    sustainabilityGoals: '',
    notifications: true
  });

  const steps = [
    {
      title: 'Welcome to TravelPal',
      subtitle: 'Your ultimate travel companion',
      content: (
        <div className="text-center">
          <Plane size={80} className="text-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 text-lg mb-8">
            Organize your trips, connect with fellow travelers, and make a positive impact on the world through sustainable travel choices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <MapPin className="text-blue-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Organize Everything</h3>
              <p className="text-gray-600 text-sm">Keep all your travel documents, itineraries, and notes in one place</p>
            </div>
            <div className="p-4">
              <Users className="text-teal-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Connect & Share</h3>
              <p className="text-gray-600 text-sm">Chat with travel companions and share experiences with the community</p>
            </div>
            <div className="p-4">
              <Leaf className="text-green-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Travel Sustainably</h3>
              <p className="text-gray-600 text-sm">Make eco-friendly choices and see your positive environmental impact</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'What\'s Your Travel Style?',
      subtitle: 'Help us personalize your experience',
      content: (
        <div className="space-y-4">
          {[
            { id: 'adventure', label: 'Adventure & Exploration', desc: 'Hiking, outdoor activities, off-the-beaten-path destinations' },
            { id: 'luxury', label: 'Luxury & Comfort', desc: 'High-end accommodations, fine dining, premium experiences' },
            { id: 'budget', label: 'Budget-Friendly', desc: 'Cost-effective options, hostels, local experiences' },
            { id: 'cultural', label: 'Cultural Immersion', desc: 'Museums, local traditions, historical sites' },
            { id: 'relaxation', label: 'Relaxation & Wellness', desc: 'Spas, beaches, peaceful retreats' }
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setUserPreferences(prev => ({ ...prev, travelStyle: style.id }))}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                userPreferences.travelStyle === style.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-1">{style.label}</h3>
              <p className="text-gray-600 text-sm">{style.desc}</p>
            </button>
          ))}
        </div>
      )
    },
    {
      title: 'What Interests You Most?',
      subtitle: 'Select all that apply',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            'Photography', 'Food & Dining', 'History', 'Nature', 
            'Architecture', 'Nightlife', 'Shopping', 'Museums',
            'Beaches', 'Mountains', 'Cities', 'Local Culture'
          ].map((interest) => (
            <button
              key={interest}
              onClick={() => {
                setUserPreferences(prev => ({
                  ...prev,
                  interests: prev.interests.includes(interest)
                    ? prev.interests.filter(i => i !== interest)
                    : [...prev.interests, interest]
                }));
              }}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                userPreferences.interests.includes(interest)
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      )
    },
    {
      title: 'Sustainability Goals',
      subtitle: 'How important is eco-friendly travel to you?',
      content: (
        <div className="space-y-4">
          {[
            { id: 'very', label: 'Very Important', desc: 'I actively seek eco-certified options and prioritize sustainability' },
            { id: 'somewhat', label: 'Somewhat Important', desc: 'I\'m interested in sustainable options when convenient' },
            { id: 'learning', label: 'Just Learning', desc: 'I\'m new to sustainable travel but want to learn more' },
            { id: 'not-priority', label: 'Not a Priority', desc: 'I focus on other aspects of travel planning' }
          ].map((goal) => (
            <button
              key={goal.id}
              onClick={() => setUserPreferences(prev => ({ ...prev, sustainabilityGoals: goal.id }))}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                userPreferences.sustainabilityGoals === goal.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-1">{goal.label}</h3>
              <p className="text-gray-600 text-sm">{goal.desc}</p>
            </button>
          ))}
        </div>
      )
    },
    {
      title: 'You\'re All Set!',
      subtitle: 'Ready to start your travel journey',
      content: (
        <div className="text-center">
          <Star size={80} className="text-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 text-lg mb-8">
            Welcome to the TravelPal community! Your personalized travel dashboard is ready, and we can't wait to see where your adventures take you.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl p-6 text-white mb-6">
            <h3 className="text-xl font-semibold mb-2">Your First Reward</h3>
            <p className="mb-3">Start with 100 travel credits just for joining!</p>
            <div className="text-3xl font-bold">100 Credits</div>
          </div>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Create your first trip to get started</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700">Explore sustainable travel options</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Connect with fellow travelers</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userPreferences.travelStyle !== '';
      case 3:
        return userPreferences.sustainabilityGoals !== '';
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-600 text-lg">
              {steps[currentStep].subtitle}
            </p>
          </div>

          <div className="mb-8">
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                canProceed()
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
