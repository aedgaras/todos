import Button from '@mui/joy/Button';
import { useColorScheme } from '@mui/joy/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ColorSwitch: React.FC = () => {
    const { mode, setMode } = useColorScheme();
    const { t } = useTranslation();

    return (
        <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
            {mode === 'dark' ? t('color-mode.turn-on-light') : t('color-mode.turn-on-dark')}
        </Button>
    );
};
