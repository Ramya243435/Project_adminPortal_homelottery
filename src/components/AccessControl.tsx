import React, { useState } from 'react';
import { Plus, Edit, Trash2, Shield, Key, Users, Settings, Lock, UserCheck } from 'lucide-react';

const AccessControl = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const admins = [
    {
      id: 1,
      name: 'John Administrator',
      email: 'john.admin@platform.com',
      role: 'Super Admin',
      permissions: ['all'],
      status: 'active',
      lastLogin: '2025-01-15 14:30',
      createdAt: '2024-12-01',
      avatar: 'JA'
    },
    {
      id: 2,
      name: 'Sarah Manager',
      email: 'sarah.manager@platform.com',
      role: 'Campaign Manager',
      permissions: ['campaigns', 'announcements', 'banners'],
      status: 'active',
      lastLogin: '2025-01-15 09:15',
      createdAt: '2024-12-15',
      avatar: 'SM'
    },
    {
      id: 3,
      name: 'Mike Support',
      email: 'mike.support@platform.com',
      role: 'User Support',
      permissions: ['users', 'statistics_read'],
      status: 'active',
      lastLogin: '2025-01-14 16:45',
      createdAt: '2025-01-05',
      avatar: 'MS'
    },
    {
      id: 4,
      name: 'Emma Analyst',
      email: 'emma.analyst@platform.com',
      role: 'Data Analyst',
      permissions: ['statistics', 'reports'],
      status: 'inactive',
      lastLogin: '2025-01-10 11:20',
      createdAt: '2024-11-20',
      avatar: 'EA'
    }
  ];

  const roles = [
    {
      name: 'Super Admin',
      description: 'Full access to all platform features',
      permissions: ['all'],
      users: 1,
      color: 'red'
    },
    {
      name: 'Campaign Manager',
      description: 'Manage lottery campaigns and promotional content',
      permissions: ['campaigns', 'announcements', 'banners', 'winners'],
      users: 1,
      color: 'blue'
    },
    {
      name: 'User Support',
      description: 'Handle user registrations and support requests',
      permissions: ['users', 'statistics_read'],
      users: 1,
      color: 'green'
    },
    {
      name: 'Data Analyst',
      description: 'Access to analytics and reporting features',
      permissions: ['statistics', 'reports'],
      users: 1,
      color: 'purple'
    }
  ];

  const permissions = [
    { key: 'users', name: 'User Management', description: 'View, approve, and manage user accounts' },
    { key: 'campaigns', name: 'Campaign Management', description: 'Create and manage lottery campaigns' },
    { key: 'winners', name: 'Winner Management', description: 'Announce winners and manage prizes' },
    { key: 'announcements', name: 'Announcements', description: 'Create and manage platform announcements' },
    { key: 'banners', name: 'Banner Control', description: 'Manage promotional banners' },
    { key: 'statistics', name: 'Full Statistics', description: 'Access all analytics and reports' },
    { key: 'statistics_read', name: 'Statistics (Read Only)', description: 'View analytics without modification' },
    { key: 'access_control', name: 'Access Control', description: 'Manage admin accounts and permissions' },
    { key: 'reports', name: 'Reports', description: 'Generate and export reports' }
  ];

  const CreateAdminModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Create New Admin Account</h3>
          <button
            onClick={() => setShowCreateModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a role</option>
              <option value="campaign_manager">Campaign Manager</option>
              <option value="user_support">User Support</option>
              <option value="data_analyst">Data Analyst</option>
              <option value="custom">Custom Role</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Permissions</label>
            <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
              {permissions.map((permission) => (
                <div key={permission.key} className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id={permission.key}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <label htmlFor={permission.key} className="text-sm font-medium text-gray-700">
                      {permission.name}
                    </label>
                    <p className="text-xs text-gray-500">{permission.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter temporary password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="requirePasswordChange"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              defaultChecked
            />
            <label htmlFor="requirePasswordChange" className="text-sm text-gray-700">
              Require password change on first login
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
              Create Admin Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getRoleBadge = (role: string, color: string) => {
    const colorClasses = {
      red: 'bg-red-100 text-red-800',
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Access Control</h2>
          <p className="text-gray-600">Manage admin accounts and permissions</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Admin</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Admins</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Roles</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <Lock className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Super Admins</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admin Accounts */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Admin Accounts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">{admin.avatar}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                          <div className="text-sm text-gray-500">{admin.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getRoleBadge(admin.role, roles.find(r => r.name === admin.role)?.color || 'blue')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(admin.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Key className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roles */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Roles & Permissions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {roles.map((role, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {getRoleBadge(role.name, role.color)}
                    <span className="text-xs text-gray-500">{role.users} user{role.users !== 1 ? 's' : ''}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                  <div className="space-y-1">
                    {role.permissions.slice(0, 3).map((permission) => (
                      <div key={permission} className="flex items-center text-xs text-gray-500">
                        <Settings className="h-3 w-3 mr-1" />
                        {permissions.find(p => p.key === permission)?.name || permission}
                      </div>
                    ))}
                    {role.permissions.length > 3 && (
                      <div className="text-xs text-gray-400">
                        +{role.permissions.length - 3} more permissions
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCreateModal && <CreateAdminModal />}
    </div>
  );
};

export default AccessControl;