import { CssVarsProvider } from '@mui/joy';
import React, { PropsWithChildren, Suspense } from 'react';
import { LoadingSpinner } from '../components';
import { SessionProvider } from './SessionProvider';

export const AppProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <CssVarsProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <SessionProvider>{props.children}</SessionProvider>
            </Suspense>
        </CssVarsProvider>
    );
};
