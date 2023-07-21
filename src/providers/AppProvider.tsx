import { CssVarsProvider } from '@mui/joy';
import React, { PropsWithChildren, Suspense } from 'react';
import { LoadingSpinner } from '../components';

export const AppProvider: React.FC<PropsWithChildren> = (props) => {

    return (
        <CssVarsProvider>
            <Suspense fallback={<LoadingSpinner />}>{props.children}</Suspense>
        </CssVarsProvider>
    );
};
