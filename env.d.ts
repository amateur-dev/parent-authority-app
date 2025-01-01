declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_SKIP_AUTH: string;
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_TWILIO_ACCOUNT_SID: string;
      EXPO_PUBLIC_TWILIO_AUTH_TOKEN: string;
      EXPO_PUBLIC_TWILIO_PHONE_NUMBER: string;
      EXPO_PUBLIC_OPENAI_API_KEY: string;
    }
  }
}

// Need to use export {} to make it a module
export {} 