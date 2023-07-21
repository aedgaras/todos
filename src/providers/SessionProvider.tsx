import { Box } from '@mui/joy';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Session } from '@supabase/supabase-js';
import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const SessionContext = createContext<Session | null>(null);

export const SessionProvider: React.FC<PropsWithChildren> = (props) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (!session) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 300,
                    }}
                >
                    <Auth
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        providers={[]}
                    />
                </Box>
            </Box>
        );
    }

    return <SessionContext.Provider value={session}>{props.children}</SessionContext.Provider>;
};
