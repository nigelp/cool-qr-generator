import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useQRStore } from '../stores/qrStore';
import BusinessCardForm from './forms/BusinessCardForm';
import WifiForm from './forms/WifiForm';
import WebLinkForm from './forms/WebLinkForm';
import EventForm from './forms/EventForm';
import PaymentForm from './forms/PaymentForm';
import MenuForm from './forms/MenuForm';
import FeedbackForm from './forms/FeedbackForm';
import LocationForm from './forms/LocationForm';
import MarketingForm from './forms/MarketingForm';
import GeneralForm from './forms/GeneralForm';

export default function QRCodeGenerator() {
  const { selectedCategory, content } = useQRStore();
  const data = content.data || {};

  const getQRContent = () => {
    try {
      switch (selectedCategory) {
        case 'general':
          return data.content || 'Enter your content';
          
        case 'business':
          const { name = '', title = '', company = '', email = '', phone = '', website = '' } = data;
          return `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nTITLE:${title}\nORG:${company}\nEMAIL:${email}\nTEL:${phone}\nURL:${website}\nEND:VCARD`;
        
        case 'wifi':
          const { ssid = '', password = '', encryption = 'WPA' } = data;
          return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
        
        case 'url':
          return data.url || 'https://example.com';
        
        case 'event':
          const { 
            title: eventTitle = '',
            date = '',
            time = '',
            location = '',
            description = '',
            registrationUrl = ''
          } = data;
          
          if (!date || !time) return 'Event details incomplete';
          
          const formattedDate = date.replace(/-/g, '');
          const formattedTime = time.replace(/:/g, '');
          
          // Create a calendar event with a registration URL
          const calendarEvent = `BEGIN:VEVENT
SUMMARY:${eventTitle}
DTSTART:${formattedDate}T${formattedTime}00
LOCATION:${location}
DESCRIPTION:${description}\n\nRegister here: ${registrationUrl}
END:VEVENT`;

          // If a registration URL is provided, create a landing page URL
          if (registrationUrl) {
            return `${registrationUrl}?event=${encodeURIComponent(eventTitle)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&location=${encodeURIComponent(location)}`;
          }
          
          return calendarEvent;
        
        case 'payment':
          const { type = 'paypal', recipient = '', amount = '', reference = '' } = data;
          return `${type}:${recipient}?amount=${amount}&note=${reference}`;
        
        case 'menu':
          return data.menuUrl || 'https://example.com/menu';
        
        case 'feedback':
          return data.formUrl || 'https://example.com/feedback';
        
        case 'location':
          return data.mapsUrl || 'https://maps.google.com';
        
        case 'marketing':
          return data.url || 'https://example.com/campaign';
        
        default:
          return 'Please select a QR type';
      }
    } catch (error) {
      console.error('Error generating QR content:', error);
      return 'Error generating QR code';
    }
  };

  const renderForm = () => {
    switch (selectedCategory) {
      case 'general':
        return <GeneralForm />;
      case 'business':
        return <BusinessCardForm />;
      case 'wifi':
        return <WifiForm />;
      case 'url':
        return <WebLinkForm />;
      case 'event':
        return <EventForm />;
      case 'payment':
        return <PaymentForm />;
      case 'menu':
        return <MenuForm />;
      case 'feedback':
        return <FeedbackForm />;
      case 'location':
        return <LocationForm />;
      case 'marketing':
        return <MarketingForm />;
      default:
        return <p className="text-gray-500">Please select a QR type</p>;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Content
          </h2>
          {renderForm()}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Preview
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl flex items-center justify-center">
          <div className="p-4 bg-white rounded-lg">
            <QRCodeCanvas
              value={getQRContent()}
              size={200}
              level="H"
              includeMargin
            />
          </div>
        </div>
      </div>
    </div>
  );
}