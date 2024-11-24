import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function MarketingForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Campaign Name"
        value={data.campaign || ''}
        onChange={(e) => handleChange('campaign', e.target.value)}
        placeholder="Spring Sale 2024"
      />
      <FormInput
        label="Landing Page URL"
        type="url"
        value={data.url || ''}
        onChange={(e) => handleChange('url', e.target.value)}
        placeholder="https://example.com/campaign"
      />
      <FormTextarea
        label="Campaign Description"
        value={data.description || ''}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Discover our amazing offers..."
      />
      <FormInput
        label="Promo Code"
        value={data.promoCode || ''}
        onChange={(e) => handleChange('promoCode', e.target.value)}
        placeholder="SPRING24"
      />
      <FormInput
        label="Expiration Date"
        type="date"
        value={data.expiry || ''}
        onChange={(e) => handleChange('expiry', e.target.value)}
      />
    </div>
  );
}