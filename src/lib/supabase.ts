import { createClient } from '@supabase/supabase-js';

// Environment variables should be defined in .env
// VITE_SUPABASE_URL=https://your-project.supabase.co
// VITE_SUPABASE_ANON_KEY=your-anon-key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: { 'x-application-name': 'solum-sf-industrial' },
  },
});

// Helper for industrial telemetry logging
export const logTelemetry = async (event: string, metadata: any = {}) => {
  console.log(`[Telemetry] ${event}`, metadata);
  // Real implementation: supabase.from('telemetry').insert([{ event, metadata, ts: new Date() }])
};
