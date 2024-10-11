import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/router";

interface AuthContextData {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const login = (email: string, password: string) => {
        if (email === "user@email.com" && password === "User123@") {
            setIsAuthenticated(true);
            localStorage.setItem("isAuth", "true");
            router.push("/admin/catalog");
        } else {
            localStorage.setItem("isAuth", "false");
            alert("Credenciais inválidas!");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuth", "false");
        router.push("/");
    };

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
