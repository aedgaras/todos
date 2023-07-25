import { CssVarsProvider } from '@mui/joy';
import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { LoadingSpinner } from '../components';
import { queryClient } from '../lib/client';
import { router } from '../routes';
import { SessionProvider } from './SessionProvider';

export const AppProvider: React.FC = () => {
    return (
        <CssVarsProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <QueryClientProvider client={queryClient}>
                    <SessionProvider>
                        <RouterProvider router={router} />
                    </SessionProvider>
                </QueryClientProvider>
            </Suspense>
        </CssVarsProvider>
    );
};
