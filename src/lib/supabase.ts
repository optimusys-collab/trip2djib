import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TripRequest = {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  travelers: string;
  experience_type: string;
  message: string;
};
