import { useState, useEffect } from 'react';

/**
 * Custom hook to check if a user is authenticated.
 * 
 * This hook checks for the presence of an authentication token in `localStorage`
 * and updates the `isLoggedIn` state accordingly.
 * 
 * @returns {boolean} - Returns `true` if the user is logged in, otherwise `false`.
 */
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Checks if an authentication token exists in localStorage.
     * If a token is found, sets `isLoggedIn` to `true`, otherwise sets it to `false`.
     */
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken'); 
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  return isLoggedIn;
};

export default useAuth;
