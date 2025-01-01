import { User } from '@/types/auth';
import { CONFIG } from '@/constants/config';

// Test user for development
const TEST_USER: User = {
  id: 'test-user-id',
  name: 'Test User',
  phoneNumber: '+1234567890',
};

export async function loginWithTestAccount(): Promise<{ user: User }> {
  if (!CONFIG.SKIP_AUTH) {
    throw new Error('Test login is not enabled');
  }
  await new Promise(resolve => setTimeout(resolve, 500));
  return { user: TEST_USER };
}

export async function sendVerificationCode(phoneNumber: string): Promise<{ success: boolean }> {
  if (CONFIG.SKIP_AUTH) {
    return { success: true };
  }
  const response = await fetch(`${CONFIG.API_URL}/auth/send-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send verification code');
  }
  
  return response.json();
}

export async function verifyCode(phoneNumber: string, code: string): Promise<{ user: User }> {
  if (CONFIG.SKIP_AUTH) {
    return { user: TEST_USER };
  }
  const response = await fetch(`${CONFIG.API_URL}/auth/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber, code }),
  });
  
  if (!response.ok) {
    throw new Error('Invalid verification code');
  }
  
  return response.json();
} 