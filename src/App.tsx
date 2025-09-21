import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
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

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, logout } = useAuth();

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

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex-shrink-0 flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">Admin Portal</h1>
              <p className="text-sm text-gray-400">Lottery Platform</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-8 flex-1 overflow-y-auto">
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

        <div className="p-6 border-t border-gray-700 mt-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <UserCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
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
                onClick={logout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;