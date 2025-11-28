import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill';

const SUPABASE_URL = 'https://ndanbvsljmjvvhbqfxdv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYW5idnNsam1qdnZoYnFmeGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMTM1MzQsImV4cCI6MjA3OTg4OTUzNH0.w50ZtBMv2TU-WO2EG6sknzerqEQF4l5_Y4HhvVsRKTw';
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);