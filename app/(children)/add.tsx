import { useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ui/ThemedText';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/ui/Button';
import { ErrorText } from '@/components/common/ErrorText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type FormData = {
  name: string;
  age: string;
  dailyTasks: string;
  routines: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function AddChildScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() || 'light';
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    dailyTasks: '',
    routines: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age))) {
      newErrors.age = 'Age must be a number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // TODO: Implement save logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      router.back();
    } catch (error) {
      console.error('Failed to save child:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Input
          label="Child's Name"
          value={formData.name}
          onChangeText={(text) => {
            setFormData(prev => ({ ...prev, name: text }));
            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
          }}
          placeholder="Enter child's name"
          error={errors.name}
        />

        <Input
          label="Age"
          value={formData.age}
          onChangeText={(text) => {
            setFormData(prev => ({ ...prev, age: text }));
            if (errors.age) setErrors(prev => ({ ...prev, age: undefined }));
          }}
          placeholder="Enter child's age"
          keyboardType="numeric"
          error={errors.age}
        />

        <Input
          label="Daily Tasks"
          value={formData.dailyTasks}
          onChangeText={(text) => setFormData(prev => ({ ...prev, dailyTasks: text }))}
          placeholder="Enter daily tasks (e.g., Homework, Reading, etc.)"
          multiline
          numberOfLines={3}
        />

        <Input
          label="Routines"
          value={formData.routines}
          onChangeText={(text) => setFormData(prev => ({ ...prev, routines: text }))}
          placeholder="Enter routines (e.g., Bedtime at 8 PM)"
          multiline
          numberOfLines={3}
        />
      </ScrollView>

      <ThemedView style={styles.footer}>
        <Button
          title="Cancel"
          onPress={() => router.back()}
          variant="secondary"
        />
        <Button
          title={isLoading ? 'Saving...' : 'Save Child Profile'}
          onPress={handleSubmit}
          disabled={isLoading}
        />
      </ThemedView>

      {isLoading && (
        <ThemedView style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors[colorScheme].primary} />
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  footer: {
    padding: 16,
    gap: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 