import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function MenuForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Restaurant Name"
        value={data.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="The Gourmet Kitchen"
      />
      <FormInput
        label="Menu URL"
        type="url"
        value={data.menuUrl || ''}
        onChange={(e) => handleChange('menuUrl', e.target.value)}
        placeholder="https://restaurant.com/menu"
      />
      <FormTextarea
        label="Special Instructions"
        value={data.instructions || ''}
        onChange={(e) => handleChange('instructions', e.target.value)}
        placeholder="Scan to view our digital menu..."
      />
      <FormInput
        label="Contact Number"
        type="tel"
        value={data.phone || ''}
        onChange={(e) => handleChange('phone', e.target.value)}
        placeholder="+1 234 567 890"
      />
    </div>
  );
}