import { useContext } from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from '../../../lib/session';
import { supabase } from '../../../lib/supabase';
import { TodoDto } from '../types';

const getTodos = async (userId?: string) =>
    supabase
        .from('Todo')
        .select('*')
        .eq('user_id', userId)
        .then((r) => {
            return r.data as TodoDto[];
        });

export function useGetTodos() {
    const sessionContext = useContext(SessionContext);
    const key = ['todos'];

    return useQuery<TodoDto[]>(key, async () => getTodos(sessionContext?.user.id), {
        cacheTime: 0,
    });
}
