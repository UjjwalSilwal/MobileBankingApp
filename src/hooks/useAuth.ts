import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    // mock API call (replace later with backend)
    if (email === 'admin' && password === '1234') {
      setUser({ name: 'Admin User' });
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}