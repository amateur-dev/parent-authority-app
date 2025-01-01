import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text';
};

export function Button({ title, onPress, variant = 'primary' }: Props) {
  const colorScheme = useColorScheme() || 'light';
  
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant !== 'text' && styles[variant],
        variant !== 'text' && { backgroundColor: Colors[colorScheme].primary }
      ]} 
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        variant === 'text' && { color: Colors[colorScheme].primary }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
}); 