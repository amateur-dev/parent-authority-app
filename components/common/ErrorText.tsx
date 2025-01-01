import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function ErrorText({ children }: { children: string }) {
  const colorScheme = useColorScheme() ?? 'light';
  
  return (
    <ThemedText style={[styles.text, { color: Colors[colorScheme].error }]}>
      {children}
    </ThemedText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginTop: 4,
  },
}); 