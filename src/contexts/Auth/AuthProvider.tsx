import React, { useEffect, useState } from "react";

import { useApi } from "../../services/auth";
import { AuthContext, ISignInData, IUser } from "./AuthContext";

interface IUserLogged {
  email: string;
  date: string;
}
export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);
  const api = useApi();

  // Validando token do localStorage
  useEffect(() => {
    const validateToken = async () => {
      const storageToken = localStorage.getItem("authToken");
      if (storageToken) {
        const data = await api.validateToken(storageToken);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  const saveEmailLocalSorage = (user: IUserLogged) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Função que salva token no localStorage
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  // Função que faz logout na aplicação
  const signout = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, setUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
