import { TaskAlt } from '@mui/icons-material';
import { Sheet, Typography, useTheme } from '@mui/joy';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const NavBar: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Sheet
            variant="outlined"
            sx={{ borderRadius: 'sm', p: 1, display: 'flex', alignItems: 'center' }}
        >
            <Sheet sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TaskAlt sx={{ color: theme.colorSchemes.light.palette.primary[500] }} />
                <Typography level="h4">{t('title.todos')}</Typography>
            </Sheet>
        </Sheet>
    );
};
