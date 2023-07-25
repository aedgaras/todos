import { useContext, useEffect } from 'react';
import { SessionContext } from '../../../lib/session';
import { updateTodo } from '../api/updateTodo';

export function useAutoSaveTask(taskId: string | undefined, task: string, isChecked: boolean) {
    const sessionContext = useContext(SessionContext);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (taskId) {
                await updateTodo(taskId, task, isChecked, sessionContext?.user.id);
            }
        }, 1500);

        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [task, isChecked]);
}
