"use client";
import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Context = createContext();

export const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [logError, setLogError] = useState(false);

    const [watchList, setWatchList] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [watched, setWatched] = useState([]);

    function handleLogError() {
        setLogError(true);
        console.log("Error en la petición");
        setTimeout(() => {
            setLogError(false);
        }, 3000);
    }

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
                        handleLogError();
                    throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("usuario logueado", data);
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

    const logout = () => { // Función para cerrar sesión
        setUser({});
        setLogged(false);
    };

    async function addToWatchList(movieId) {  // Función para añadir una película a la quiero ver
        if (!user.watchList.includes(movieId)) {
           user.watchList.push(movieId);
        } else {
            return;
        }

        const options = {
            method: 'put',
            body: JSON.stringify({ watchList: user.watchList}),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(`http://localhost:5000/api/users/${user._id}`, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                        throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("Lista actualizada", data);
            })
            .catch((error) => console.log(error));
    }

    async function addToFavorites(movieId) {  // Función para añadir una película a la favoritas
        if (!user.favorites.includes(movieId)) {
           user.favorites.push(movieId);
        } else {
            return;
        }

        const options = {
            method: 'put',
            body: JSON.stringify({ favorites: user.favorites}),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(`http://localhost:5000/api/users/${user._id}`, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                        throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("Lista actualizada", data);
            })
            .catch((error) => console.log(error));
    }

    async function addToWatched(movieId) {  // Función para añadir una película a la vistas
        if (!user.watched.includes(movieId)) {
           user.watched.push(movieId);
        } else {
            return;
        }

        const options = {
            method: 'put',
            body: JSON.stringify({ watched: user.watched}),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(`http://localhost:5000/api/users/${user._id}`, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                        throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("Lista actualizada", data);
            })
            .catch((error) => console.log(error));
    }

    async function removeFromWatchList(movieId) {  // Función para eliminar una película de la watchlist
        if (!logged) {
            console.error("User is not logged in");
            return;
        }

        const updatedWatchList = user.watchList.filter(id => id !== movieId);

        const options = {
            method: 'put',
            body: JSON.stringify({ watchList: updatedWatchList }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(`http://localhost:5000/api/users/${user._id}`, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((data) => {
                        throw new Error('Error en la petición' || data.error);
                    });
                }
                return res.json();
            })
            .then((data) => {
                console.log("Lista actualizada", data);
                setUser({ ...user, watchList: updatedWatchList }); // Actualiza el usuario con la nueva lista de seguimiento
            })
            .catch((error) => console.log(error));
    }

async function removeFromList(listName, itemId) {
    if (!logged) {
        console.error("User is not logged in");
        return;
    }

    const updatedList = user[listName].filter(id => id !== itemId);
    const updatedUser = { ...user, [listName]: updatedList };

    const options = {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(`http://localhost:5000/api/users/${user._id}`, options);
        if (!response.ok) {
            const data = await response.json();
            throw new Error('Error en la petición' || data.error);
        }
        const data = await response.json();
        console.log("Usuario actualizado", data);

        setUser(updatedUser);
    } catch (error) {
        console.error(error);
    }
}

    return (
        <Context.Provider value={{
            user,
            logged,
            login,
            logout,
            register,
            addToWatchList,
            addToFavorites,
            addToWatched,
            removeFromWatchList,
            removeFromList,
            watchList,
            favorites,
            watched,
            setWatchList,
            setFavorites,
            setWatched,
            logError, 
        }}>
            {children}
        </Context.Provider>
    );
};
