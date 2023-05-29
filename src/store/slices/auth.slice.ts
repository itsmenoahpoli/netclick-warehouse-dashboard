import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

type AuthState = {
  user: object | null;
  authToken: string | null;
  REMOVE_AUTH_DATA: () => void;
  SET_AUTH_DATA: (data: any) => void;
};

type AuthData = {
  user: object;
  authToken: string;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      authToken: null,
      SET_AUTH_DATA: (data: AuthData) => {
        set((state) => ({ ...state, user: data.user, authToken: data.authToken }));
      },
      REMOVE_AUTH_DATA: () => {
        set(() => ({ user: {}, authToken: null }));
      },
    }),
    { name: "auth-store-storage" }
  )
);

mountStoreDevtool("AUTH_STORE", useAuthStore);
