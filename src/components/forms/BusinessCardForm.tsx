import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';

export default function BusinessCardForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Full Name"
        value={data.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="John Doe"
      />
      <FormInput
        label="Job Title"
        value={data.title || ''}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Senior Developer"
      />
      <FormInput
        label="Company"
        value={data.company || ''}
        onChange={(e) => handleChange('company', e.target.value)}
        placeholder="Tech Corp"
      />
      <FormInput
        label="Email"
        type="email"
        value={data.email || ''}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="john@example.com"
      />
      <FormInput
        label="Phone"
        type="tel"
        value={data.phone || ''}
        onChange={(e) => handleChange('phone', e.target.value)}
        placeholder="+1 234 567 890"
      />
      <FormInput
        label="Website"
        type="url"
        value={data.website || ''}
        onChange={(e) => handleChange('website', e.target.value)}
        placeholder="https://example.com"
      />
    </div>
  );
}