import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function LocationForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Location Name"
        value={data.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Business Name or Place"
      />
      <FormInput
        label="Address"
        value={data.address || ''}
        onChange={(e) => handleChange('address', e.target.value)}
        placeholder="123 Main St, City, State"
      />
      <FormInput
        label="Google Maps URL"
        type="url"
        value={data.mapsUrl || ''}
        onChange={(e) => handleChange('mapsUrl', e.target.value)}
        placeholder="https://maps.google.com/?q=..."
      />
      <FormTextarea
        label="Additional Instructions"
        value={data.instructions || ''}
        onChange={(e) => handleChange('instructions', e.target.value)}
        placeholder="Parking available in rear..."
      />
    </div>
  );
}