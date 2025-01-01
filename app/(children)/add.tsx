import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { ErrorText } from '@/components/common/ErrorText';
import { api } from '@/services/api';

export default function AddChildScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      if (!name || !age) {
        setError('Please fill in all fields');
        return;
      }

      // Add child through API
      await api.createChild({
        name,
        age: parseInt(age, 10)
      });

      // Navigate back to children list
      router.back();
    } catch (err) {
      setError('Failed to add child');
      console.error('Add child error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Add Child</ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Child's Name"
          autoCapitalize="words"
          autoComplete="name"
        />

        <Input
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="number-pad"
          maxLength={2}
        />

        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          title="Add Child"
          onPress={handleSubmit}
          loading={loading}
        />

        <Button
          title="Cancel"
          variant="secondary"
          onPress={() => router.back()}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingBottom: 0,
  },
  form: {
    padding: 20,
    gap: 16,
  },
}); 