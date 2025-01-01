import { Stack } from 'expo-router';
import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
import { useSegments, useRouter } from 'expo-router';
import { AuthContextType, User } from '@/types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    
    if (!user && !inAuthGroup) {
      router.replace('/login');
    } else if (user && inAuthGroup) {
      router.replace('/');
    }
  }, [user, segments]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="(children)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="(children)/add" 
          options={{ 
            presentation: 'modal',
            title: 'Add Child',
            headerShown: true 
          }} 
        />
      </Stack>
    </AuthContext.Provider>
  );
}
