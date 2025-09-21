import axiosInstance from './axiosInstance';

// Auth API endpoints
export const authAPI = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },
  
  logout: async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  },
  
  verifyToken: async () => {
    const response = await axiosInstance.get('/auth/verify');
    return response.data;
  },
  
  refreshToken: async () => {
    const response = await axiosInstance.post('/auth/refresh');
    return response.data;
  }
};

// User Management API
export const userAPI = {
  getPendingUsers: async () => {
    const response = await axiosInstance.get('/users/pending');
    return response.data;
  },
  
  approveUser: async (userId: number) => {
    const response = await axiosInstance.put(`/users/${userId}/approve`);
    return response.data;
  },
  
  rejectUser: async (userId: number, reason: string) => {
    const response = await axiosInstance.put(`/users/${userId}/reject`, { reason });
    return response.data;
  },
  
  getUsers: async (status?: string) => {
    const response = await axiosInstance.get(`/users${status ? `?status=${status}` : ''}`);
    return response.data;
  }
};

// Lottery Management API
export const lotteryAPI = {
  getLotteries: async () => {
    const response = await axiosInstance.get('/lotteries');
    return response.data;
  },
  
  createLottery: async (lotteryData: any) => {
    const response = await axiosInstance.post('/lotteries', lotteryData);
    return response.data;
  },
  
  updateLottery: async (id: number, lotteryData: any) => {
    const response = await axiosInstance.put(`/lotteries/${id}`, lotteryData);
    return response.data;
  },
  
  deleteLottery: async (id: number) => {
    const response = await axiosInstance.delete(`/lotteries/${id}`);
    return response.data;
  }
};

// Statistics API
export const statisticsAPI = {
  getDashboardStats: async () => {
    const response = await axiosInstance.get('/statistics/dashboard');
    return response.data;
  },
  
  getRevenueData: async (timeRange: string) => {
    const response = await axiosInstance.get(`/statistics/revenue?range=${timeRange}`);
    return response.data;
  },
  
  getUserGrowth: async (timeRange: string) => {
    const response = await axiosInstance.get(`/statistics/users?range=${timeRange}`);
    return response.data;
  }
};

// Announcements API
export const announcementAPI = {
  getAnnouncements: async () => {
    const response = await axiosInstance.get('/announcements');
    return response.data;
  },
  
  createAnnouncement: async (announcementData: any) => {
    const response = await axiosInstance.post('/announcements', announcementData);
    return response.data;
  },
  
  updateAnnouncement: async (id: number, announcementData: any) => {
    const response = await axiosInstance.put(`/announcements/${id}`, announcementData);
    return response.data;
  },
  
  deleteAnnouncement: async (id: number) => {
    const response = await axiosInstance.delete(`/announcements/${id}`);
    return response.data;
  }
};

// Banners API
export const bannerAPI = {
  getBanners: async () => {
    const response = await axiosInstance.get('/banners');
    return response.data;
  },
  
  createBanner: async (bannerData: any) => {
    const response = await axiosInstance.post('/banners', bannerData);
    return response.data;
  },
  
  updateBanner: async (id: number, bannerData: any) => {
    const response = await axiosInstance.put(`/banners/${id}`, bannerData);
    return response.data;
  },
  
  deleteBanner: async (id: number) => {
    const response = await axiosInstance.delete(`/banners/${id}`);
    return response.data;
  }
};

// Winners API
export const winnerAPI = {
  getWinners: async () => {
    const response = await axiosInstance.get('/winners');
    return response.data;
  },
  
  createWinner: async (winnerData: any) => {
    const response = await axiosInstance.post('/winners', winnerData);
    return response.data;
  },
  
  updateWinner: async (id: number, winnerData: any) => {
    const response = await axiosInstance.put(`/winners/${id}`, winnerData);
    return response.data;
  },
  
  deleteWinner: async (id: number) => {
    const response = await axiosInstance.delete(`/winners/${id}`);
    return response.data;
  }
};

// Access Control API
export const accessControlAPI = {
  getAdmins: async () => {
    const response = await axiosInstance.get('/admin/users');
    return response.data;
  },
  
  createAdmin: async (adminData: any) => {
    const response = await axiosInstance.post('/admin/users', adminData);
    return response.data;
  },
  
  updateAdmin: async (id: number, adminData: any) => {
    const response = await axiosInstance.put(`/admin/users/${id}`, adminData);
    return response.data;
  },
  
  deleteAdmin: async (id: number) => {
    const response = await axiosInstance.delete(`/admin/users/${id}`);
    return response.data;
  },
  
  getRoles: async () => {
    const response = await axiosInstance.get('/admin/roles');
    return response.data;
  }
};