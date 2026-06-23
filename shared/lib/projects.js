import { supabase } from './supabase';

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Failed to fetch projects:', error.message);
    return [];
  }
  return data;
}
