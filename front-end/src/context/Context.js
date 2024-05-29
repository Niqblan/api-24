"use client"
import { createContext, useState } from 'react';
import { users } from '@/mock/mockdata';
import { useRouter } from 'next/navigation';

export const Context = createContext();

export const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    const login = async (userData) => {
        await fetch('http://localhost:5000/api/users/login', {
            method:"POST",
            body: JSON.stringify(userData),
            headers: {"Content-Type":"application/json"}
        })
            .then(response => response.json())
            .then(data => {setUser(data), router.push("/") })
            .catch(error => console.error('Error:', error));

    };

    const logout = () => {
        setUser({});
        setLogged(false);
    };

    return (
        <Context.Provider value={{ user, logged, login, logout }}>
            {children}
        </Context.Provider>
    );
};
