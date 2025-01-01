import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PhoneInput } from '@/components/auth/PhoneInput';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create Account</ThemedText>
      
      <View style={styles.form}>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
        />
        
        <PhoneInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
        />
        
        <Button 
          onPress={() => {/* Handle registration */}}
          title="Create Account"
        />
      </View>

      <Link href="/login">
        <ThemedText type="link">Already have an account? Sign in</ThemedText>
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