import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = TextInputProps & {
  error?: string;
};

export function Input({ style, error, ...props }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  
  return (
    <TextInput
      style={[
        styles.input,
        { 
          color: Colors[colorScheme].text,
          borderColor: error ? Colors[colorScheme].error : Colors[colorScheme].border,
        },
        style,
      ]}
      placeholderTextColor={Colors[colorScheme].secondary}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
}); 