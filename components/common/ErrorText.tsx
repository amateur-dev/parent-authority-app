import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';

type Props = {
  children: string;
};

export function ErrorText({ children }: Props) {
  return (
    <ThemedText style={styles.error}>{children}</ThemedText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: '#E11D48',
    fontSize: 14,
  },
}); 