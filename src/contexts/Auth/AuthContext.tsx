import { createContext } from "react";

export interface IUser {
  id?: number;
  name: string;
  email: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser;
  signIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);
