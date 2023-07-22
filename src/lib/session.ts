import { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export const SessionContext = createContext<Session | undefined>(undefined);
