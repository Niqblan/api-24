"use client"
import { createContext, useState } from 'react';
import { users } from '@/mock/mockdata';
import { useRouter } from 'next/navigation';

export const Context = createContext();

export const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    const login = (userData) => {
        authUser(userData);
    };

    const logout = () => {
        setUser({});
        setLogged(false);
    };

    const authUser = (userData) => {
        const foundUser = users.find((u) => u.email === userData.email && u.password === userData.password);
        if (foundUser) {
            setUser(foundUser);
            setLogged(true);
            router.push('/');
        } else {
            console.log('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Context.Provider value={{ user, logged, login, logout }}>
            {children}
        </Context.Provider>
    );
};
