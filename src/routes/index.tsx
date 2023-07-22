import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { NavBar } from '../features/navigation/components/NavBar';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout navBar={<NavBar />} />,
        children: [{ path: '/', element: <>hello</> }],
    },
]);
