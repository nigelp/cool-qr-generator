import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';

export default function WebLinkForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="URL"
        type="url"
        value={data.url || ''}
        onChange={(e) => handleChange('url', e.target.value)}
        placeholder="https://example.com"
      />
      <FormInput
        label="Title (Optional)"
        value={data.title || ''}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="My Website"
      />
    </div>
  );
}