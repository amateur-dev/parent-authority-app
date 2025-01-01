export const CONFIG = {
  SKIP_AUTH: process.env.EXPO_PUBLIC_SKIP_AUTH === 'true',
  API_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  TWILIO: {
    ACCOUNT_SID: process.env.EXPO_PUBLIC_TWILIO_ACCOUNT_SID || '',
    AUTH_TOKEN: process.env.EXPO_PUBLIC_TWILIO_AUTH_TOKEN || '',
    PHONE_NUMBER: process.env.EXPO_PUBLIC_TWILIO_PHONE_NUMBER || '',
  },
  OPENAI: {
    API_KEY: process.env.EXPO_PUBLIC_OPENAI_API_KEY || '',
  },
};

export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    VERIFY: '/verify',
  },
  DASHBOARD: '/',
  CHILDREN: {
    LIST: '/children',
    ADD: '/children/add',
    DETAILS: (id: string) => `/children/${id}`,
  },
  SETTINGS: '/settings',
}; 