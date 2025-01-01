import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ui/ThemedText';
import { ErrorText } from './ErrorText';

interface Props extends TextInputProps {
  label: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: Props) {
  const colorScheme = useColorScheme() || 'light';
  
  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TextInput
        style={[
          styles.input,
          { 
            borderColor: Colors[colorScheme].border,
            color: Colors[colorScheme].text,
          },
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={Colors[colorScheme].border}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#E11D48',
  },
}); 