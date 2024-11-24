import { create } from 'zustand';
import { QRContent } from '../types/qr';

interface QRStore {
  selectedCategory: string;
  content: QRContent;
  setCategory: (category: string) => void;
  updateContent: (data: Record<string, string>) => void;
}

export const useQRStore = create<QRStore>((set) => ({
  selectedCategory: 'general',
  content: {
    type: 'general',
    data: {},
  },
  setCategory: (category) => set({ 
    selectedCategory: category,
    content: { type: category, data: {} }
  }),
  updateContent: (data) => set((state) => ({
    content: {
      ...state.content,
      data,
    }
  })),
}));