import { QueryClient } from 'react-query';
import { supabase } from '../../../lib/supabase';

export const addTodo = async (queryClient: QueryClient, task: string, userId?: string) => {
    await supabase
        .from('Todo')
        .insert([{ task: task, user_id: userId }])
        .select();

    queryClient.invalidateQueries({ queryKey: ['todos'] });
};
