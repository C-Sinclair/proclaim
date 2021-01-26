import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tcxvjdwapcyxxgokcout.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMTY3ODQ0NywiZXhwIjoxOTI3MjU0NDQ3fQ.zZQ-Vu1FxZs4JmKzXx2xcOXKvFKWM8Ch7QLH2Ms1q0M"
);

supabase.auth.onAuthStateChange((event, session) => {
  // if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
  // if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000)

  // Send session to /api/auth route to set the auth cookie
  fetch("/api/auth", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify({ event, session }),
  }).then((res) => res.json());
});
