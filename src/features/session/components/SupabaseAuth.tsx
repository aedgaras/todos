import { Box } from '@mui/joy';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import React from 'react';
import { supabase } from '../../../lib/supabase';

export const SupabaseAuth: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: 300,
                }}
            >
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
            </Box>
        </Box>
    );
};
