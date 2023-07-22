import { CssVarsProvider } from '@mui/joy';
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LoadingSpinner } from '../components';
import { router } from '../routes';
import { SessionProvider } from './SessionProvider';

export const AppProvider: React.FC = () => {
    return (
        <CssVarsProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <SessionProvider>
                    <RouterProvider router={router} />
                </SessionProvider>
            </Suspense>
        </CssVarsProvider>
    );
};
