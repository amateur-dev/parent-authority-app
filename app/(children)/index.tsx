import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ChildCard } from '@/components/children/ChildCard';
import { Button } from '@/components/common/Button';
import { useRouter } from 'expo-router';

export default function ChildrenScreen() {
  const router = useRouter();

  const handleAddChild = () => {
    router.push('/(children)/add');
  };

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
        <ThemedView style={styles.childrenList}>
          <Link href="/children/1" asChild>
            <ChildCard
              name="Tim"
              age={8}
              tasksCompleted={3}
              totalTasks={5}
            />
          </Link>
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
}); 