import { ScrollView, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ChildCard } from '@/components/children/ChildCard';
import { Button } from '@/components/common/Button';
import { fetchChildren, deleteChild, Child } from '@/services/api';

export default function ChildrenScreen() {
  const router = useRouter();
  const [children, setChildren] = useState<Child[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    try {
      setIsLoading(true);
      const data = await fetchChildren();
      setChildren(data);
      setError(null);
    } catch (err) {
      setError('Failed to load children');
      Alert.alert('Error', 'Failed to load children');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteChild = async (id: number) => {
    try {
      await deleteChild(id);
      setChildren(children.filter(child => child.id !== id));
      Alert.alert('Success', 'Child deleted successfully');
    } catch (err) {
      Alert.alert('Error', 'Failed to delete child');
    }
  };

  const handleAddChild = () => {
    router.push('/(children)/add');
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Children</ThemedText>
        <Button 
          title="Add Child" 
          onPress={handleAddChild}
        />
      </ThemedView>
      
      <ScrollView style={styles.content}>
        {error ? (
          <ThemedText style={styles.error}>{error}</ThemedText>
        ) : (
          <ThemedView style={styles.childrenList}>
            {children.map(child => (
              <ChildCard
                key={child.id}
                name={child.name}
                age={child.age}
                tasksCompleted={child.tasks?.length ?? 0}
                totalTasks={child.tasks?.length ?? 0}
                onDelete={() => handleDeleteChild(child.id!)}
                onPress={() => router.push(`/children/${child.id}`)}
              />
            ))}
          </ThemedView>
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  childrenList: {
    padding: 20,
    gap: 16,
  },
  error: {
    padding: 20,
    color: '#E11D48',
    textAlign: 'center',
  },
}); 