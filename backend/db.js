import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jijgzprbiyrivfquelfy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppamd6cHJiaXlyaXZmcXVlbGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNDk3OTQsImV4cCI6MjA5MzYyNTc5NH0.qUcxlpXPb9ZsDCQA8rFPV1MDrGMdu3oELJApVozdumw";

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;