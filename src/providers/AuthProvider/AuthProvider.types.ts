export type User = {
  uid: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  register: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
