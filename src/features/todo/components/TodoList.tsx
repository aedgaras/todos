import { Stack } from '@mui/joy';
import React from 'react';
import { TodoComponent } from '.';
import { Todo } from '../types';

export const TodoList: React.FC = () => {
    const todos: Todo[] = [
        { isDone: true, task: 'Buy Grocceries' },
        { isDone: false, task: 'Have fun!' },
    ];

    return (
        <Stack spacing={1}>
            {todos.map((todo) => {
                return <TodoComponent isDone={todo.isDone} task={todo.task} />;
            })}
        </Stack>
    );
};
