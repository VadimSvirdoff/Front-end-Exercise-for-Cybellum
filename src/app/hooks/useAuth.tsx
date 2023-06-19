import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

type AuthContextType = {
    user: User | null;
    login: (data: User) => void;
    logout: () => void;
};

type User = {
    username: string;
    email: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useLocalStorage("token", null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data: User) => {
        setUser(data);
        navigate("/");
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};