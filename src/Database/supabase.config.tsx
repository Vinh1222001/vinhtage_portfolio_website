import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://wgwgsekezynjlhhlqumg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnd2dzZWtlenluamxoaGxxdW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwOTk4MTMsImV4cCI6MjAxNDY3NTgxM30.LYalkXTe0dBA8avqI46GPtDmBO9IIBIQMTrWmBCStiA')
export default supabase