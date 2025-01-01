import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';

export default function SettingsScreen() {
  const { user, setUser } = useAuth();
  
  const handleLogout = () => {
    setUser(null);
    router.replace('/login');
  };
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Account</ThemedText>
        <ThemedText>Phone: {user?.phoneNumber}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Notifications</ThemedText>
        <Button
          title="Configure Notifications"
          onPress={() => {/* TODO: Implement notifications settings */}}
        />
      </ThemedView>
      
      <ThemedView style={styles.section}>
        <Button
          title="Logout"
          variant="secondary"
          onPress={handleLogout}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginTop: 32,
    gap: 16,
  },
}); 