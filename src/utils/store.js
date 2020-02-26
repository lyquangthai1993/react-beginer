
import React, {createContext, useState} from 'react'

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState(null);

  const store = {
    user: [user, setUser]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};