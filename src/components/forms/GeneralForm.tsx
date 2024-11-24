import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormTextarea from '../ui/FormTextarea';

export default function GeneralForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormTextarea
        label="Content"
        value={data.content || ''}
        onChange={(e) => handleChange('content', e.target.value)}
        placeholder="Enter any text, URL, or data you want to encode in the QR code..."
        rows={8}
      />
    </div>
  );
}