import { supabase } from '../../../lib/supabase';

export const updateTodo = async (id: string, task: string, completed: boolean, userId?: string) => {
    await supabase
        .from('Todo')
        .update({ task: task, completed: completed })
        .eq('id', id)
        .eq('user_id', userId)
        .select();
};
