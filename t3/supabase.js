//import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://ypbexbkuoudcnxnlnmpj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYmV4Ymt1b3VkY254bmxubXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MDIzMjEsImV4cCI6MjA3NzQ3ODMyMX0.eZRDSWV18tRQuObFR9t65v6yKM6vV9UmmtRxXzO0umo')

console.log(supabaseClient)