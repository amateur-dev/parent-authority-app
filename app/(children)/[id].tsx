import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/common/Button';
import { ErrorText } from '@/components/common/ErrorText';

export default function ChildDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [child, setChild] = useState<{
    name: string;
    age: number;
    tasks: Array<{ id: string; title: string; completed: boolean }>;
  } | null>(null);
  
  useEffect(() => {
    loadChild();
  }, [id]);
  
  const loadChild = async () => {
    try {
      setLoading(true);
      // TODO: Add API call to fetch child details
      setChild({
        name: 'Tim',
        age: 8,
        tasks: [
          { id: '1', title: 'Homework', completed: true },
          { id: '2', title: 'Clean room', completed: false },
        ],
      });
    } catch (err) {
      setError('Failed to load child details');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">{child?.name}</ThemedText>
        <ThemedText>{child?.age} years old</ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Daily Tasks</ThemedText>
          <Button 
            title="Add Task"
            onPress={() => {/* TODO: Implement add task */}}
          />
        </ThemedView>
        
        {error ? <ErrorText>{error}</ErrorText> : null}
        
        <ThemedView style={styles.taskList}>
          {child?.tasks.map(task => (
            <ThemedView key={task.id} style={styles.task}>
              <ThemedText>{task.title}</ThemedText>
              <Button
                title={task.completed ? 'Completed' : 'Mark Complete'}
                variant={task.completed ? 'secondary' : 'primary'}
                onPress={() => {/* TODO: Implement toggle task */}}
              />
            </ThemedView>
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskList: {
    padding: 20,
    gap: 16,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
}); 