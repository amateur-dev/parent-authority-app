import { View, TextInput, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function PhoneInput({ value, onChangeText, placeholder }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  
  return (
    <View style={styles.container}>
      <ThemedText style={styles.prefix}>+1</ThemedText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="phone-pad"
        style={[
          styles.input,
          { color: Colors[colorScheme].text }
        ]}
        placeholderTextColor={Colors[colorScheme].secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  prefix: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
}); 