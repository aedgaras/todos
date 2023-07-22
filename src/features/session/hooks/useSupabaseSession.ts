import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';

export function useSupabaseSession(): Session | undefined {
    const [session, setSession] = useState<Session | undefined>(undefined);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session ?? undefined);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session ?? undefined);
        });

        return () => subscription.unsubscribe();
    }, []);
    return session;
}
