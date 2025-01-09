import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      
      const token = localStorage.getItem('authToken'); 
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return isLoggedIn;
};

export default useAuth;
