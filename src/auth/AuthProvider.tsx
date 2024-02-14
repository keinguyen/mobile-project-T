import React from "react";
import { AuthAction, AuthProviderProps, AuthState } from "./AuthProvider.type";
import { AuthContext } from "./auth";

const initialAuthState: AuthState = {
  isLoading: false,
  isSignOut: false,
  userToken: "",
  userProfile: {
    accessToken: "",
    userName: "",
  },
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...state,
        userToken: action.token,
        isSignOut: false,
      };
    case "SIGN_OUT":
      return {
        ...state,
        userToken: null,
        isSignOut: true,
      };
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialAuthState);
  const { userToken, userProfile } = state;

  const authContext = React.useMemo(
    () => ({
      userToken,
      userProfile,
      signIn: (userName, accessToken) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
        dispatch({
          type: "SET_USER_PROFILE",
          userProfile: {
            accessToken,
            userName,
          },
        });
      },
      signOut: () => {
        console.log("****** 121313 ******", 121313);

        dispatch({ type: "SIGN_OUT" });
      },
      signUp: () => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    [userToken]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
