import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Image, Calendar, Play, Pause } from 'lucide-react';

const BannerManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const banners = [
    {
      id: 1,
      title: 'Summer Jackpot Promotion',
      description: 'Main hero banner for the summer jackpot campaign',
      imageUrl: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'hero',
      status: 'active',
      startDate: '2025-01-15',
      endDate: '2025-02-15',
      clicks: 1247,
      impressions: 15678,
      createdAt: '2025-01-14'
    },
    {
      id: 2,
      title: 'Valentine Special Sidebar',
      description: 'Sidebar banner for Valentine\'s Day special lottery',
      imageUrl: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'sidebar',
      status: 'scheduled',
      startDate: '2025-02-10',
      endDate: '2025-02-18',
      clicks: 0,
      impressions: 0,
      createdAt: '2025-01-15'
    },
    {
      id: 3,
      title: 'New User Welcome Banner',
      description: 'Welcome banner displayed to new registered users',
      imageUrl: 'https://images.pexels.com/photos/3761519/pexels-photo-3761519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'top',
      status: 'active',
      startDate: '2025-01-01',
      endDate: '2025-12-31',
      clicks: 892,
      impressions: 8945,
      createdAt: '2025-01-01'
    },
    {
      id: 4,
      title: 'Maintenance Notice Footer',
      description: 'Footer banner for scheduled maintenance notification',
      imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'footer',
      status: 'paused',
      startDate: '2025-01-20',
      endDate: '2025-01-21',
      clicks: 234,
      impressions: 2340,
      createdAt: '2025-01-18'
    }
  ];

  const CreateBannerModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Create New Banner</h3>
          <button
            onClick={() => setShowCreateModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Banner Title</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter banner title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter banner description..."
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="hero">Hero Banner</option>
                <option value="top">Top Banner</option>
                <option value="sidebar">Sidebar</option>
                <option value="footer">Footer</option>
                <option value="popup">Popup</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="scheduled">Scheduled</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Image className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">Upload banner image or enter URL</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="banner-upload"
              />
              <label
                htmlFor="banner-upload"
                className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
              >
                Choose File
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="datetime-local"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="datetime-local"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Link URL (Optional)</label>
            <input
              type="url"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="trackClicks"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="trackClicks" className="text-sm text-gray-700">
              Enable click tracking
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      paused: 'bg-yellow-100 text-yellow-800',
      expired: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPositionBadge = (position: string) => {
    const positionColors = {
      hero: 'bg-purple-100 text-purple-800',
      top: 'bg-blue-100 text-blue-800',
      sidebar: 'bg-green-100 text-green-800',
      footer: 'bg-yellow-100 text-yellow-800',
      popup: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${positionColors[position as keyof typeof positionColors]}`}>
        {position.charAt(0).toUpperCase() + position.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Banner Management</h2>
          <p className="text-gray-600">Create and manage promotional banners across the platform</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Banner</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Play className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Banners</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Impressions</p>
              <p className="text-2xl font-bold text-gray-900">26.9K</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Image className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Clicks</p>
              <p className="text-2xl font-bold text-gray-900">2.4K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{banner.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{banner.description}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                {getPositionBadge(banner.position)}
                {getStatusBadge(banner.status)}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="text-gray-900">{banner.startDate} to {banner.endDate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Performance</p>
                  <p className="text-gray-900">{banner.clicks} clicks / {banner.impressions.toLocaleString()} views</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Created: {banner.createdAt}
                </div>
                <div className="flex items-center space-x-2">
                  {banner.status === 'active' ? (
                    <button className="flex items-center space-x-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors">
                      <Pause className="h-3 w-3" />
                      <span>Pause</span>
                    </button>
                  ) : (
                    <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                      <Play className="h-3 w-3" />
                      <span>Activate</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && <CreateBannerModal />}
    </div>
  );
};

export default BannerManagement;