import { CONFIG } from '@/constants/config';

class ApiService {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    this.baseUrl = CONFIG.API_URL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return response.json();
  }

  // Children endpoints
  async getChildren() {
    return this.fetch('/children');
  }

  async getChild(id: string) {
    return this.fetch(`/children/${id}`);
  }

  async createChild(data: { name: string; age: number }) {
    return this.fetch('/children', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateChild(id: string, data: Partial<{ name: string; age: number }>) {
    return this.fetch(`/children/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Tasks endpoints
  async createTask(childId: string, data: { title: string }) {
    return this.fetch(`/children/${childId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTask(childId: string, taskId: string, data: { completed: boolean }) {
    return this.fetch(`/children/${childId}/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiService(); 