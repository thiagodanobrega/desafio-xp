import { useState } from "react";

import { AuthContext, IUser } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
