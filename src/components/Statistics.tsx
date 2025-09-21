import React, { useState } from 'react';
import { Calendar, TrendingUp, Users, DollarSign, Trophy, BarChart3, PieChart, Activity } from 'lucide-react';

const Statistics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const overviewStats = [
    {
      name: 'Total Revenue',
      value: '$284,950',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      name: 'Active Users',
      value: '12,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      name: 'Tickets Sold',
      value: '45,231',
      change: '+24.1%',
      trend: 'up',
      icon: Trophy,
      color: 'purple'
    },
    {
      name: 'Conversion Rate',
      value: '3.8%',
      change: '+0.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'yellow'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, tickets: 1200 },
    { month: 'Feb', revenue: 52000, tickets: 1350 },
    { month: 'Mar', revenue: 48000, tickets: 1280 },
    { month: 'Apr', revenue: 61000, tickets: 1420 },
    { month: 'May', revenue: 55000, tickets: 1380 },
    { month: 'Jun', revenue: 67000, tickets: 1520 },
  ];

  const topCampaigns = [
    { name: 'Summer Jackpot', participants: 1247, revenue: '$62,350', conversion: '4.2%' },
    { name: 'New Year Bonanza', participants: 8945, revenue: '$178,900', conversion: '3.8%' },
    { name: 'Valentine Special', participants: 892, revenue: '$22,300', conversion: '3.1%' },
    { name: 'Christmas Special', participants: 6732, revenue: '$134,640', conversion: '3.9%' },
  ];

  const userGrowth = [
    { period: 'Week 1', newUsers: 234, totalUsers: 11580 },
    { period: 'Week 2', newUsers: 189, totalUsers: 11769 },
    { period: 'Week 3', newUsers: 297, totalUsers: 12066 },
    { period: 'Week 4', newUsers: 312, totalUsers: 12378 },
    { period: 'Week 5', newUsers: 469, totalUsers: 12847 },
  ];

  const deviceStats = [
    { device: 'Desktop', percentage: 45, users: 5781 },
    { device: 'Mobile', percentage: 42, users: 5396 },
    { device: 'Tablet', percentage: 13, users: 1670 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Statistics</h2>
          <p className="text-gray-600">Monitor platform performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <BarChart3 className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            green: 'bg-green-500',
            blue: 'bg-blue-500',
            purple: 'bg-purple-500',
            yellow: 'bg-yellow-500'
          };
          
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
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
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trends</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {revenueData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{data.month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(data.revenue / 70000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      ${(data.revenue / 1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Campaigns */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Campaigns</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topCampaigns.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                    <p className="text-sm text-gray-600">{campaign.participants} participants</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{campaign.revenue}</p>
                    <p className="text-sm text-green-600">{campaign.conversion} CVR</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Growth */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {userGrowth.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{data.period}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">+{data.newUsers} new</span>
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(data.totalUsers / 15000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      {data.totalUsers.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Statistics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Device Usage</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {deviceStats.map((device, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{device.device}</span>
                    <span className="text-sm text-gray-600">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{device.users.toLocaleString()} users</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Real-time Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-3">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-600">Tickets Sold (Last Hour)</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">$324</p>
              <p className="text-sm text-gray-600">Revenue (Last Hour)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;