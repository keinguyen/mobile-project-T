export type AuthProviderProps = {
  children?: React.ReactNode;
};

export type AuthState = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: string | null;
  userProfile: {
    userName: string;
    accessToken: string;
  };
};

export type AuthAction =
  | { type: "RESTORE_TOKEN"; token: string | null }
  | { type: "SIGN_IN"; token: string | null }
  | {
      type: "SET_USER_PROFILE";
      userProfile: { userName: string; accessToken: string };
    }
  | { type: "SIGN_OUT"; token?: null };
