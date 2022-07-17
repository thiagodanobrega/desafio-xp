import React, { useMemo, useState } from "react";

import { useApi } from "../../services/auth";
import { AuthContext, ISignInData, IUser } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);
  const api = useApi();

  // Função que salva token no localStorage
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  // Função que valida usuário e retorna um booleano
  const signIn = async ({ email, password }: ISignInData): Promise<boolean> => {
    const { token, user } = await api.sigIn({ email, password });
    if (token && user) {
      setUser(user);
      setToken(token);
      return true;
    }
    return false;
  };

  // Função que faz logout na aplicação
  const signout = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  const auth = useMemo(() => ({ user, signIn, signout }), []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
