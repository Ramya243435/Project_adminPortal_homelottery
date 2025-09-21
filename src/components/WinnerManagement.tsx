import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Award, Trophy, Calendar, DollarSign } from 'lucide-react';

const WinnerManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const winners = [
    {
      id: 1,
      campaignName: 'New Year Bonanza',
      winnerName: 'Sarah Johnson',
      winnerEmail: 'sarah.j@gmail.com',
      prizeAmount: '$100,000',
      drawDate: '2025-01-01',
      announcedDate: '2025-01-02',
      status: 'announced',
      paymentStatus: 'paid',
      ticketNumber: 'TB-2025-001-7893',
      totalParticipants: 8945,
      verified: true
    },
    {
      id: 2,
      campaignName: 'Christmas Special',
      winnerName: 'Mike Wilson',
      winnerEmail: 'mike.wilson@yahoo.com',
      prizeAmount: '$50,000',
      drawDate: '2024-12-25',
      announcedDate: '2024-12-26',
      status: 'announced',
      paymentStatus: 'paid',
      ticketNumber: 'TB-2024-012-4567',
      totalParticipants: 6732,
      verified: true
    },
    {
      id: 3,
      campaignName: 'Thanksgiving Draw',
      winnerName: 'Emma Davis',
      winnerEmail: 'emma.davis@email.com',
      prizeAmount: '$25,000',
      drawDate: '2024-11-28',
      announcedDate: null,
      status: 'pending',
      paymentStatus: 'pending',
      ticketNumber: 'TB-2024-011-9876',
      totalParticipants: 4521,
      verified: true
    },
    {
      id: 4,
      campaignName: 'Halloween Horror',
      winnerName: 'James Brown',
      winnerEmail: 'james.brown@gmail.com',
      prizeAmount: '$15,000',
      drawDate: '2024-10-31',
      announcedDate: '2024-11-01',
      status: 'announced',
      paymentStatus: 'processing',
      ticketNumber: 'TB-2024-010-3456',
      totalParticipants: 3245,
      verified: false
    }
  ];

  const CreateWinnerModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Create Winner Announcement</h3>
          <button
            onClick={() => setShowCreateModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Campaign</label>
            <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a campaign</option>
              <option value="1">Summer Jackpot 2025</option>
              <option value="2">Valentine Special</option>
              <option value="3">Weekend Winner</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Winner Name</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter winner's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Winner Email</label>
              <input
                type="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter winner's email"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Prize Amount</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="$0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Winning Ticket Number</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="TB-YYYY-MMM-XXXX"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Draw Date</label>
              <input
                type="datetime-local"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Participants</label>
              <input
                type="number"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Winner Verification Photo</label>
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">Upload winner verification photo</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="verification-upload"
              />
              <label
                htmlFor="verification-upload"
                className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
              >
                Choose File
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Announcement Message</label>
            <textarea
              rows={4}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter winner announcement message..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="winnerVerified"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="winnerVerified" className="text-sm text-gray-700">
                Winner identity verified
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="publishImmediately"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="publishImmediately" className="text-sm text-gray-700">
                Publish announcement immediately
              </label>
            </div>
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
              Create Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      announced: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusColors = {
      paid: 'bg-green-100 text-green-800',
      processing: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Winner Management</h2>
          <p className="text-gray-600">Manage lottery winners and prize announcements</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Announce Winner</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Winners</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Announced</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Prizes</p>
              <p className="text-2xl font-bold text-gray-900">$190K</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Winners Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Winner Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign & Winner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prize & Ticket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {winners.map((winner) => (
                <tr key={winner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{winner.campaignName}</div>
                      <div className="text-sm text-gray-600">{winner.winnerName}</div>
                      <div className="text-xs text-gray-500">{winner.winnerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{winner.prizeAmount}</div>
                      <div className="text-sm text-gray-600">{winner.ticketNumber}</div>
                      <div className="text-xs text-gray-500">{winner.totalParticipants} participants</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      {getStatusBadge(winner.status)}
                      {winner.verified && (
                        <div className="flex items-center">
                          <Award className="h-3 w-3 text-green-500 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPaymentStatusBadge(winner.paymentStatus)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">Draw: {winner.drawDate}</div>
                      {winner.announcedDate && (
                        <div className="text-sm text-gray-500">Announced: {winner.announcedDate}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showCreateModal && <CreateWinnerModal />}
    </div>
  );
};

export default WinnerManagement;