import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function FeedbackForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Business Name"
        value={data.business || ''}
        onChange={(e) => handleChange('business', e.target.value)}
        placeholder="Your Business Name"
      />
      <FormInput
        label="Feedback Form URL"
        type="url"
        value={data.formUrl || ''}
        onChange={(e) => handleChange('formUrl', e.target.value)}
        placeholder="https://forms.example.com/feedback"
      />
      <FormTextarea
        label="Thank You Message"
        value={data.message || ''}
        onChange={(e) => handleChange('message', e.target.value)}
        placeholder="Thank you for your feedback!"
      />
      <FormInput
        label="Reward/Discount Code"
        value={data.reward || ''}
        onChange={(e) => handleChange('reward', e.target.value)}
        placeholder="FEEDBACK10"
      />
    </div>
  );
}