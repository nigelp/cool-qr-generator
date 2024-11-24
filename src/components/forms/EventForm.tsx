import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function EventForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Event Title"
        value={data.title || ''}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Annual Tech Conference"
      />
      <FormInput
        label="Date"
        type="date"
        value={data.date || ''}
        onChange={(e) => handleChange('date', e.target.value)}
      />
      <FormInput
        label="Time"
        type="time"
        value={data.time || ''}
        onChange={(e) => handleChange('time', e.target.value)}
      />
      <FormInput
        label="Location"
        value={data.location || ''}
        onChange={(e) => handleChange('location', e.target.value)}
        placeholder="Convention Center, City"
      />
      <FormTextarea
        label="Description"
        value={data.description || ''}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Join us for an exciting event..."
      />
      <FormInput
        label="Registration Form URL"
        type="url"
        value={data.registrationUrl || ''}
        onChange={(e) => handleChange('registrationUrl', e.target.value)}
        placeholder="https://example.com/register"
      />
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Add your registration form URL to create an interactive RSVP experience. When scanned, users will see event details and can choose to register through your form.
        </p>
      </div>
    </div>
  );
}