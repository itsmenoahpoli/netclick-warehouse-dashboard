export const APP_VARS = {
  getEnv: (key: string): string => {
    return import.meta.env["VITE_APP_" + key] as string;
  },
};
