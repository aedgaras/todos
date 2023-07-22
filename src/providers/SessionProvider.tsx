import React, { PropsWithChildren } from 'react';
import { SupabaseAuth, useSupabaseSession } from '../features/session';
import { SessionContext } from '../lib/session';

export const SessionProvider: React.FC<PropsWithChildren> = (props) => {
    const session = useSupabaseSession();

    if (!session) {
        return <SupabaseAuth />;
    }

    return <SessionContext.Provider value={session}>{props.children}</SessionContext.Provider>;
};
