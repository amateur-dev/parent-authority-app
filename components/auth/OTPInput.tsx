import { View, TextInput, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ui/ThemedText';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  length?: number;
};

export function OTPInput({ value, onChangeText, length = 6 }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const inputRef = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);
  
  const digits = value.split('');
  
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={(text) => onChangeText(text.slice(0, length))}
        maxLength={length}
        keyboardType="number-pad"
        style={styles.hiddenInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      
      <View style={styles.boxes}>
        {Array(length).fill(0).map((_, i) => (
          <View
            key={i}
            style={[
              styles.box,
              { borderColor: Colors[colorScheme].border },
              focused && i === value.length && { borderColor: Colors[colorScheme].primary }
            ]}>
            <ThemedText style={styles.digit}>{digits[i]}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
  boxes: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  box: {
    width: 40,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digit: {
    fontSize: 20,
    fontWeight: '600',
  },
}); 