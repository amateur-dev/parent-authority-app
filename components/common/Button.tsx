import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'text';
  loading?: boolean;
  disabled?: boolean;
};

export function Button({ 
  onPress, 
  title, 
  variant = 'primary',
  loading = false,
  disabled = false 
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      style={[
        styles.button,
        variant !== 'text' && { backgroundColor: Colors[colorScheme][variant] },
        disabled && styles.disabled
      ]}>
      {loading ? (
        <ActivityIndicator color={variant === 'text' ? Colors[colorScheme].primary : '#fff'} />
      ) : (
        <ThemedText 
          style={[
            styles.text,
            variant !== 'text' && { color: '#fff' }
          ]}>
          {title}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
}); 