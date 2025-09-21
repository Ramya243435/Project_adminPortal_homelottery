import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Eye, Plus, UserCheck, AlertCircle } from 'lucide-react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const pendingUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      socialMedia: '@johnsmith_official',
      platform: 'Instagram',
      submittedAt: '2025-01-15 14:30',
      documents: ['ID Card', 'Social Media Screenshot'],
      status: 'pending'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@gmail.com',
      socialMedia: '@sarahj_tweets',
      platform: 'Twitter',
      submittedAt: '2025-01-15 12:15',
      documents: ['Passport', 'Social Media Screenshot'],
      status: 'pending'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.wilson@yahoo.com',
      socialMedia: '@mikew_fb',
      platform: 'Facebook',
      submittedAt: '2025-01-15 10:45',
      documents: ['Driver License', 'Social Media Screenshot'],
      status: 'pending'
    }
  ];

  const approvedUsers = [
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      socialMedia: '@emmad_insta',
      platform: 'Instagram',
      approvedAt: '2025-01-14 16:20',
      status: 'approved'
    },
    {
      id: 5,
      name: 'James Brown',
      email: 'james.brown@gmail.com',
      socialMedia: '@jamesbrown_x',
      platform: 'Twitter',
      approvedAt: '2025-01-14 11:30',
      status: 'approved'
    }
  ];

  const rejectedUsers = [
    {
      id: 6,
      name: 'Alex Miller',
      email: 'alex.miller@email.com',
      socialMedia: '@alexm_fake',
      platform: 'Instagram',
      rejectedAt: '2025-01-13 09:15',
      reason: 'Social media account less than 2 years old',
      status: 'rejected'
    }
  ];

  const tabs = [
    { id: 'pending', name: 'Pending Registrations', count: pendingUsers.length },
    { id: 'approved', name: 'Approved Users', count: approvedUsers.length },
    { id: 'rejected', name: 'Rejected Users', count: rejectedUsers.length }
  ];

  const getCurrentUsers = () => {
    switch (activeTab) {
      case 'pending':
        return pendingUsers;
      case 'approved':
        return approvedUsers;
      case 'rejected':
        return rejectedUsers;
      default:
        return pendingUsers;
    }
  };

  const handleApprove = (userId: number) => {
    console.log('Approving user:', userId);
    // Implementation for approval logic
  };

  const handleReject = (userId: number) => {
    console.log('Rejecting user:', userId);
    // Implementation for rejection logic
  };

  const UserDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">User Details</h3>
          <button
            onClick={() => setShowUserModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <XCircle className="h-6 w-6" />
          </button>
        </div>

        {selectedUser && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <p className="mt-1 text-sm text-gray-900">{(selectedUser as any).name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">{(selectedUser as any).email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Media</label>
                <p className="mt-1 text-sm text-gray-900">{(selectedUser as any).socialMedia}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Platform</label>
                <p className="mt-1 text-sm text-gray-900">{(selectedUser as any).platform}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Submitted Documents</label>
              <div className="grid grid-cols-2 gap-4">
                {(selectedUser as any).documents?.map((doc: string, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-sm font-medium">{doc}</p>
                    <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">View Document</button>
                  </div>
                ))}
              </div>
            </div>

            {activeTab === 'pending' && (
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleApprove((selectedUser as any).id)}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Approve User</span>
                </button>
                <button
                  onClick={() => handleReject((selectedUser as any).id)}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <XCircle className="h-4 w-4" />
                  <span>Reject User</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add User Manually</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Social Media
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getCurrentUsers().map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{user.socialMedia}</div>
                      <div className="text-sm text-gray-500">{user.platform}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.submittedAt || user.approvedAt || user.rejectedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      user.status === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {user.status === 'pending' && <AlertCircle className="h-3 w-3 mr-1" />}
                      {user.status === 'approved' && <UserCheck className="h-3 w-3 mr-1" />}
                      {user.status === 'rejected' && <XCircle className="h-3 w-3 mr-1" />}
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowUserModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {activeTab === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(user.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleReject(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showUserModal && <UserDetailModal />}
    </div>
  );
};

export default UserManagement;