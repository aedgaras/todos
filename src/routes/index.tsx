import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { NavBar } from '../features/navigation/components/NavBar';
import { TodoList } from '../features/todo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout navBar={<NavBar />} />,
        children: [{ path: '/', element: <TodoList /> }],
    },
]);
