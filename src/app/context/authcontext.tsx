'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you would validate credentials against a backend
    // For this demo, we'll check against our localStorage "database"
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { email: string, password: string }) =>
      u.email === email && u.password === password
    );

    if (user) {
      // Don't include password in the user state
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Em um aplicativo real, você enviaria esses dados para uma API de backend
    // Para esta demonstração, vamos apenas validar a entrada e armazená-la no localStorage
    if (password.length >= 6) {
      // Verifique se o e-mail já está registrado (em um aplicativo real, isso seria feito pelo backend)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: { email: string }) => u.email === email);

      if (existingUser) {
        return false; // Email already exists
      }

      // Generate a unique ID (in a real app, this would be done by the backend)
      const id = Date.now().toString();

      // Create new user
      const newUser = { id, name, email };

      // Save to "database" (localStorage)
      users.push({ id, name, email, password });
      localStorage.setItem('users', JSON.stringify(users));

      // Log the user in
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}