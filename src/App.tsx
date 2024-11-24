import React from 'react';
import { QrCode, Moon, Sun, Download, Share2 } from 'lucide-react';
import { useThemeStore } from './stores/themeStore';
import QRCodeGenerator from './components/QRCodeGenerator';
import CategorySelector from './components/CategorySelector';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <Toaster position="top-center" />
      
      <nav className="border-b px-4 py-3 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <QrCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Cool QR Generator</h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-100" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <CategorySelector />
          <QRCodeGenerator />
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Made with ❤️ using AI
          </p>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;