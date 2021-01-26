import { supabase } from "../../util/supabase";

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
