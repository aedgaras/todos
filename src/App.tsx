import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from './components';

export const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <LoadingSpinner />
        </>
    );
};
