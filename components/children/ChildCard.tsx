import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  name: string;
  age: number;
  tasksCompleted: number;
  totalTasks: number;
  onPress?: () => void;
};

export function ChildCard({ name, age, tasksCompleted, totalTasks, onPress }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const progress = (tasksCompleted / totalTasks) * 100;
  
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.header}>
          <ThemedText type="defaultSemiBold">{name}</ThemedText>
          <ThemedText>{age} years old</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.progressContainer}>
          <ThemedView 
            style={[
              styles.progressBar, 
              { 
                backgroundColor: Colors[colorScheme].border,
                width: `${progress}%`,
              }
            ]} 
          />
          <ThemedText style={styles.progressText}>
            {tasksCompleted}/{totalTasks} tasks completed
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    height: '100%',
  },
  progressText: {
    textAlign: 'center',
    fontSize: 12,
  },
}); 