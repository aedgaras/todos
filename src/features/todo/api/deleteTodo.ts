import { QueryClient } from 'react-query';
import { supabase } from '../../../lib/supabase';

export const deleteTodo = async (queryClient: QueryClient, id?: string) => {
    await supabase.from('Todo').delete().eq('id', id);

    queryClient.invalidateQueries({ queryKey: ['todos'] });
};
