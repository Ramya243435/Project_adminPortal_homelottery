import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Megaphone, 
  Image, 
  BarChart3, 
  Settings,
  Home,
  UserCheck,
  Calendar,
  Award,
  Bell
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import LotteryManagement from './components/LotteryManagement';
import AnnouncementManagement from './components/AnnouncementManagement';
import BannerManagement from './components/BannerManagement';
import WinnerManagement from './components/WinnerManagement';
import Statistics from './components/Statistics';
import AccessControl from './components/AccessControl';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to false for login flow

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'lotteries', name: 'Lottery Campaigns', icon: Trophy },
    { id: 'winners', name: 'Winner Announcements', icon: Award },
    { id: 'announcements', name: 'Announcements', icon: Megaphone },
    { id: 'banners', name: 'Banner Control', icon: Image },
    { id: 'statistics', name: 'Statistics', icon: BarChart3 },
    { id: 'access', name: 'Access Control', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'lotteries':
        return <LotteryManagement />;
      case 'winners':
        return <WinnerManagement />;
      case 'announcements':
        return <AnnouncementManagement />;
      case 'banners':
        return <BannerManagement />;
      case 'statistics':
        return <Statistics />;
      case 'access':
        return <AccessControl />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600">Lottery Platform Management</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">Admin Portal</h1>
              <p className="text-sm text-gray-400">Lottery Platform</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-800 transition-colors ${
                  activeTab === item.id ? 'bg-gray-800 border-r-4 border-blue-400' : ''
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <UserCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@platform.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">
              {navigation.find(item => item.id === activeTab)?.name || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;