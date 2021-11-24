import React, { ReactChildren, createContext, ReactChild } from 'react';
import { User } from '../Utils/getUsers';
// create context
export const UsersContext = createContext<User[]>({} as User[]);
// create context provider

interface UsersProviderProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  value: User[];
}

export const UsersProvider = function ({ children, value }:UsersProviderProps) {
  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};
