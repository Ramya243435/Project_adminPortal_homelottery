import React from 'react';
import { Users, Trophy, DollarSign, TrendingUp, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'blue' },
    { name: 'Active Lotteries', value: '8', change: '+2', icon: Trophy, color: 'green' },
    { name: 'Total Revenue', value: '$284,950', change: '+18%', icon: DollarSign, color: 'yellow' },
    { name: 'Pending Approvals', value: '23', change: '-5', icon: Clock, color: 'red' },
  ];

  const recentActivity = [
    { type: 'user_registration', user: 'John Doe', action: 'New user registration pending', time: '2 minutes ago', status: 'pending' },
    { type: 'lottery_created', user: 'Admin', action: 'New lottery "Summer Jackpot" created', time: '15 minutes ago', status: 'success' },
    { type: 'user_approved', user: 'Sarah Smith', action: 'User verification approved', time: '1 hour ago', status: 'success' },
    { type: 'winner_announced', user: 'Mike Johnson', action: 'Winner announced for "Spring Bonanza"', time: '2 hours ago', status: 'success' },
    { type: 'user_rejected', user: 'Bob Wilson', action: 'User verification rejected', time: '3 hours ago', status: 'warning' },
  ];

  const upcomingLotteries = [
    { name: 'Summer Jackpot', date: '2025-02-15', participants: 1247, prize: '$50,000' },
    { name: 'Valentine Special', date: '2025-02-14', participants: 892, prize: '$25,000' },
    { name: 'Weekend Winner', date: '2025-02-08', participants: 534, prize: '$10,000' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            yellow: 'bg-yellow-500',
            red: 'bg-red-500'
          };
          
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const statusColors = {
                  pending: 'text-yellow-600 bg-yellow-100',
                  success: 'text-green-600 bg-green-100',
                  warning: 'text-red-600 bg-red-100'
                };
                
                const statusIcons = {
                  pending: Clock,
                  success: CheckCircle,
                  warning: AlertTriangle
                };
                
                const StatusIcon = statusIcons[activity.status as keyof typeof statusIcons];
                
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${statusColors[activity.status as keyof typeof statusColors]}`}>
                      <StatusIcon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Lotteries */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Lotteries</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingLotteries.map((lottery, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{lottery.name}</h4>
                    <p className="text-sm text-gray-600">Draw: {lottery.date}</p>
                    <p className="text-sm text-gray-600">{lottery.participants} participants</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{lottery.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <Users className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Review Registrations</h4>
            <p className="text-sm text-gray-600">23 pending approvals</p>
          </button>
          <button className="p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <Trophy className="h-6 w-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Create New Lottery</h4>
            <p className="text-sm text-gray-600">Launch campaign</p>
          </button>
          <button className="p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <TrendingUp className="h-6 w-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">View Analytics</h4>
            <p className="text-sm text-gray-600">Platform insights</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;