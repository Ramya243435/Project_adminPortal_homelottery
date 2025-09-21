import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '../api/api';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // For demo purposes, use default credentials
      if (email === 'admin@platform.com' && password === 'admin123') {
        const mockUser: User = {
          id: 1,
          name: 'Admin User',
          email: 'admin@platform.com',
          role: 'Super Admin',
          permissions: ['all']
        };
        
        // Store auth data
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('adminUser', JSON.stringify(mockUser));
        setUser(mockUser);
        return;
      }
      
      // For production, use actual API call
      const response = await authAPI.login({ email, password });
      
      if (response.success) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('adminUser', JSON.stringify(response.user));
        setUser(response.user);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error: any) {
      // If API call fails, check for default credentials
      if (email === 'admin@platform.com' && password === 'admin123') {
        const mockUser: User = {
          id: 1,
          name: 'Admin User',
          email: 'admin@platform.com',
          role: 'Super Admin',
          permissions: ['all']
        };
        
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('adminUser', JSON.stringify(mockUser));
        setUser(mockUser);
        return;
      }
      
      throw new Error(error.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      authAPI.logout().catch(() => {
        // Ignore API errors during logout
      });
    } catch (error) {
      // Ignore errors
    } finally {
      localStorage.removeItem('authToken');
      localStorage.removeItem('adminUser');
      setUser(null);
    }
  };

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('adminUser');
      
      if (!token || !storedUser) {
        setUser(null);
        return;
      }

      // For demo purposes, accept mock token
      if (token === 'mock-jwt-token') {
        setUser(JSON.parse(storedUser));
        return;
      }

      // For production, verify token with API
      try {
        const response = await authAPI.verifyToken();
        if (response.success) {
          setUser(response.user);
        } else {
          throw new Error('Token verification failed');
        }
      } catch (error) {
        // If API fails but we have mock token, use stored user
        if (token === 'mock-jwt-token' && storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          localStorage.removeItem('authToken');
          localStorage.removeItem('adminUser');
          setUser(null);
        }
      }
    } catch (error) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('adminUser');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};