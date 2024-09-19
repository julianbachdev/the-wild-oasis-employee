import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kwjcgxpeqoywculfjmuo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3amNneHBlcW95d2N1bGZqbXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjcxMDcsImV4cCI6MjA0MDcwMzEwN30.HOqRbFlOlHAVKfnZoe0fdNV2vln4RJagKhInHR_3pnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
