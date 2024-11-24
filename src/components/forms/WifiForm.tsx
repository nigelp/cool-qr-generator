import React from 'react';
import { useQRStore } from '../../stores/qrStore';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';

export default function WifiForm() {
  const { content, updateContent } = useQRStore();
  const data = content.data;

  const handleChange = (field: string, value: string) => {
    updateContent({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <FormInput
        label="Network Name (SSID)"
        value={data.ssid || ''}
        onChange={(e) => handleChange('ssid', e.target.value)}
        placeholder="My WiFi Network"
      />
      <FormInput
        label="Password"
        type="password"
        value={data.password || ''}
        onChange={(e) => handleChange('password', e.target.value)}
        placeholder="Network Password"
      />
      <FormSelect
        label="Security Type"
        value={data.encryption || 'WPA'}
        onChange={(e) => handleChange('encryption', e.target.value)}
        options={[
          { value: 'WPA', label: 'WPA/WPA2' },
          { value: 'WEP', label: 'WEP' },
          { value: 'None', label: 'None' },
        ]}
      />
    </div>
  );
}