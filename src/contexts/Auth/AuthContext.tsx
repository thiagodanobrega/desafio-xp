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
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  // signIn: (data: ISignInData) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
