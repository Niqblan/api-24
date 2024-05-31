"use client"
import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';


export const Context = createContext();

export const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    async function login(user) {  // Función para iniciar sesión
        console.log(user);

        const options = {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await fetch('http://localhost:5000/api/users/login', options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                    throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("usuario logueado",data);
                setUser(data);
                setLogged(true);
                router.push('/');
            })
            .catch((error) => console.log(error));
        }

    async function register(user) {       // Función para registrar un usuario
        console.log(user);

        const options = {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await fetch('http://localhost:5000/api/users/register', options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                        throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUser(data);
                setLogged(true);
                router.push('/signIn');
                
            })
            .catch((error) => console.log(error));
        }   

    const logout = () => {
        setUser({});
        setLogged(false);
    };

    return (
        <Context.Provider value={{ user, logged, login, logout, register }}>
            {children}
        </Context.Provider>
    );
};
