import { createClient } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const supabase = createClient(import.meta.env["VITE_DB_URL"], import.meta.env["VITE_ANNON_KEY"]);

export default supabase;