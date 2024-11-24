import React from 'react';
import { 
  Briefcase, 
  Link2, 
  Wifi, 
  Calendar, 
  CreditCard, 
  UtensilsCrossed,
  MessageSquare,
  MapPin,
  Megaphone,
  FileText
} from 'lucide-react';
import { useQRStore } from '../stores/qrStore';

const categories = [
  { id: 'general', icon: FileText, label: 'General' },
  { id: 'business', icon: Briefcase, label: 'Business Card' },
  { id: 'url', icon: Link2, label: 'Web & Social' },
  { id: 'wifi', icon: Wifi, label: 'Wi-Fi' },
  { id: 'event', icon: Calendar, label: 'Events' },
  { id: 'payment', icon: CreditCard, label: 'Payment' },
  { id: 'menu', icon: UtensilsCrossed, label: 'Menu' },
  { id: 'feedback', icon: MessageSquare, label: 'Feedback' },
  { id: 'location', icon: MapPin, label: 'Location' },
  { id: 'marketing', icon: Megaphone, label: 'Marketing' },
];

export default function CategorySelector() {
  const { selectedCategory, setCategory } = useQRStore();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Select QR Type
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {categories.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCategory(id)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all ${
              selectedCategory === id
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Icon className="w-6 h-6 mb-2" />
            <span className="text-sm text-center">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}