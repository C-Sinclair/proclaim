import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tcxvjdwapcyxxgokcout.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMTY3ODQ0NywiZXhwIjoxOTI3MjU0NDQ3fQ.zZQ-Vu1FxZs4JmKzXx2xcOXKvFKWM8Ch7QLH2Ms1q0M"
);
