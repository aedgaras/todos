import { Box, CircularProgress } from '@mui/joy';
import React from 'react';

export const LoadingSpinner: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
};
