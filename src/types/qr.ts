export interface QRContent {
  type: string;
  data: Record<string, string>;
}

export interface BusinessCard {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
}

export interface WifiCredentials {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'None';
}

export interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface PaymentInfo {
  type: string;
  recipient: string;
  amount: string;
  reference: string;
}

export interface WebLink {
  url: string;
  title: string;
}