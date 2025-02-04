import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    useEffect(() => {
        let fetchUser = async () => {
            try {
                let response = await fetch("/api/users/current-user");
                let userData = await response.json();
                setUser(userData);
            } catch (error) {
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{
            user
        }}>
            {children}
        </UserContext.Provider>
    );
}

