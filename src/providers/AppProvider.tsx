import { CssVarsProvider } from '@mui/joy';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { LoadingSpinner } from '../components';
import { router } from '../routes';
import { SessionProvider } from './SessionProvider';

export const AppProvider: React.FC = () => {
    const queryClient = new QueryClient();

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
