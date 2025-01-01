import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/Button';
import { OTPInput } from '@/components/auth/OTPInput';

export default function VerifyScreen() {
  const { phoneNumber } = useLocalSearchParams();
  const [code, setCode] = useState('');
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Verify Phone</ThemedText>
      <ThemedText style={styles.subtitle}>
        Enter the code sent to {phoneNumber}
      </ThemedText>
      
      <View style={styles.form}>
        <OTPInput
          value={code}
          onChangeText={setCode}
          length={6}
        />
        
        <Button 
          onPress={() => {/* Handle verification */}}
          title="Verify"
        />
        
        <Button 
          onPress={() => {/* Resend code */}}
          title="Resend Code"
          variant="text"
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
  },
  form: {
    gap: 16,
    marginVertical: 32,
    alignItems: 'center',
  },
}); 