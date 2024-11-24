import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';

export default function PaymentForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormSelect
        label="Payment Type"
        value={data.type || 'paypal'}
        onChange={(e) => handleChange('type', e.target.value)}
        options={[
          { value: 'paypal', label: 'PayPal' },
          { value: 'venmo', label: 'Venmo' },
          { value: 'cashapp', label: 'Cash App' },
          { value: 'crypto', label: 'Cryptocurrency' },
        ]}
      />
      <FormInput
        label="Recipient"
        value={data.recipient || ''}
        onChange={(e) => handleChange('recipient', e.target.value)}
        placeholder="@username or email"
      />
      <FormInput
        label="Amount"
        type="number"
        min="0"
        step="0.01"
        value={data.amount || ''}
        onChange={(e) => handleChange('amount', e.target.value)}
        placeholder="0.00"
      />
      <FormInput
        label="Reference/Note"
        value={data.reference || ''}
        onChange={(e) => handleChange('reference', e.target.value)}
        placeholder="Payment for services"
      />
    </div>
  );
}