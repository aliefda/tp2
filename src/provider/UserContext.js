/* eslint-disable prettier/prettier */
import React, {createContext, useState, useContext} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  const updateUserData = data => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{userData, updateUserData}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
