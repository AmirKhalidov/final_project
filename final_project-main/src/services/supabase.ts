import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rcdgluiceszepyhvpcjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZGdsdWljZXN6ZXB5aHZwY2pnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwNDE1NywiZXhwIjoyMDY5ODgwMTU3fQ.bY98zTCODFT4Zkrrcwuhq53qFIHWU3lRh6lXSr3ucqY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
