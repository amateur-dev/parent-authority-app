import { Text, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  type?: 'body' | 'title' | 'subtitle';
};

export function ThemedText({ children, style, type = 'body' }: Props) {
  const colorScheme = useColorScheme() || 'light';
  
  return (
    <Text style={[
      { color: Colors[colorScheme].text },
      type === 'title' && { fontSize: 24, fontWeight: '700' },
      type === 'subtitle' && { fontSize: 16, opacity: 0.8 },
      style
    ]}>
      {children}
    </Text>
  );
} 