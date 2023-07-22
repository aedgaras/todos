import { Button, Sheet } from '@mui/joy';
import React from 'react';

export const NavBar: React.FC = () => {
    return (
        <Sheet
            variant="outlined"
            sx={{ borderRadius: 'sm', p: 1, display: 'flex', alignItems: 'center' }}
        >
            <Button />
        </Sheet>
    );
};
