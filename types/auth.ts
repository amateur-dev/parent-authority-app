import { Dispatch, SetStateAction } from 'react';

export interface User {
  id?: string;
  email?: string;
  name: string;
  phoneNumber: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
} 