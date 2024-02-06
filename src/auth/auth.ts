import React from "react";

type AuthState = {
  userToken: string | null;
  signIn: (userName: string, accessToken: string) => void;
  signOut: () => void;
  signUp: () => void;
  userProfile: {
    userName: string;
    accessToken: string;
  };
};

const initialAutthState: AuthState = {
  userToken: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
  userProfile: {
    userName: "",
    accessToken: "",
  },
};

export const AuthContext = React.createContext(initialAutthState);
