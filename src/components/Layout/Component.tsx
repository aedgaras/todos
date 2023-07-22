import { Sheet } from '@mui/joy';
import React, { PropsWithChildren, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingSpinner } from '..';

interface LayoutProps extends PropsWithChildren {
    navBar: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <Sheet sx={{ p: 2 }}>
            {props.navBar}
            <Sheet sx={{ pt: 2 }}>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </Sheet>
        </Sheet>
    );
};
