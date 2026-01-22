"use client"

import { createContext, useContext, useEffect, useState } from "react"

type AuthContextType = {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode}) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!localStorage.getItem("isAuth"));
    }, []);

    const   login = () => {
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("isAuth");
        document.cookie = "auth=; Max-Age=0; path=/"
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export  const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used inside AuthProvider");
    return context;
}