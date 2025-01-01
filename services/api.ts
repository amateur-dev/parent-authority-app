const API_URL = 'http://localhost:3000';  // For development

export interface Child {
  id?: number;
  name: string;
  age: number;
  tasks: string[];
  routines: string[];
}

export async function fetchChildren(): Promise<Child[]> {
  try {
    const response = await fetch(`${API_URL}/children`);
    if (!response.ok) throw new Error('Failed to fetch children');
    return response.json();
  } catch (error) {
    console.error('Error fetching children:', error);
    throw error;
  }
}

export async function addChild(child: Omit<Child, 'id'>): Promise<Child> {
  try {
    const response = await fetch(`${API_URL}/children`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(child),
    });
    if (!response.ok) throw new Error('Failed to add child');
    return response.json();
  } catch (error) {
    console.error('Error adding child:', error);
    throw error;
  }
}

export async function updateChild(id: number, child: Partial<Child>): Promise<Child> {
  try {
    const response = await fetch(`${API_URL}/children/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(child),
    });
    if (!response.ok) throw new Error('Failed to update child');
    return response.json();
  } catch (error) {
    console.error('Error updating child:', error);
    throw error;
  }
}

export async function deleteChild(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/children/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete child');
  } catch (error) {
    console.error('Error deleting child:', error);
    throw error;
  }
} 