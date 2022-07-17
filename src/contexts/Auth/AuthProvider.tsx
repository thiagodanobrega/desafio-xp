import React, { useState } from "react";

import { useApi } from "../../services/auth";
import { AuthContext, ISignInData, IUser } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);
  const api = useApi();

  // Função que valida usuário e retorna um booleano
  const signIn = async ({ email, password }: ISignInData): Promise<boolean> => {
    const { token, user } = await api.sigIn({ email, password });
    if (token && user) {
      setUser(user);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
