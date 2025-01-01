import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PhoneInput } from '@/components/auth/PhoneInput';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { loginWithTestAccount } from '@/services/auth';

export default function LoginScreen() {
  const { setUser } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleTestLogin = async () => {
    try {
      setLoading(true);
      const { user } = await loginWithTestAccount();
      setUser(user);
      router.replace('/');
    } catch (error) {
      console.error('Test login failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome Back</ThemedText>
      
      <View style={styles.form}>
        <PhoneInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter phone number"
        />
        
        <Button 
          onPress={() => {/* Handle regular login */}}
          title="Continue with Phone"
        />
        
        {/* Only show test login in development */}
        {process.env.NODE_ENV === 'development' && (
          <Button 
            onPress={handleTestLogin}
            title="Test Login (Dev Only)"
            variant="secondary"
            loading={loading}
          />
        )}
      </View>

      <Link href="/register">
        <ThemedText type="link">Don't have an account? Sign up</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  form: {
    gap: 16,
    marginVertical: 32,
  },
}); 