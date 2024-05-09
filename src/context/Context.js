import { createContext , useContext , useState} from 'react';
import { users } from './mockdata'; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    const login = (userData) => {
        authUser(userData);
    }

    const logout = () => {
        setUser({});
        setLogged(false);
    }

    const authUser = (userData) => {
        users.forEach(u => {
            if (u.email === userData.email && u.password === userData.password) {
                setUser(u);
                setLogged(true);
            }
        })
    }

    return (
        <AuthContext.Provider value={{ user, logged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

